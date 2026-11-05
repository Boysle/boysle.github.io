// Shows the CV PDF on the page with PDF.js (hosted in assets/js/pdfjs/):
// one canvas per page, with the PDF's own links (email, LinkedIn, papers) kept clickable.
// If anything fails, the viewer falls back to a plain link to the PDF.

const PDFJS = '/assets/js/pdfjs';
const viewer = document.getElementById('cv-viewer');
const src = viewer.dataset.src;

// The theme's content column sits to the right of an (empty) sidebar area,
// so shift the viewer to the middle of the page. Re-run whenever the page resizes.
const main = document.getElementById('main');
function centerOnPage() {
  viewer.style.transform = '';
  const m = main.getBoundingClientRect();
  const v = viewer.getBoundingClientRect();
  const shift = (m.left + m.width / 2) - (v.left + v.width / 2);
  if (Math.abs(shift) > 1) viewer.style.transform = `translateX(${shift}px)`;
}
if (main) {
  centerOnPage();
  new ResizeObserver(centerOnPage).observe(main);
}

async function render() {
  const pdfjsLib = await import(`${PDFJS}/pdf.min.js`);
  pdfjsLib.GlobalWorkerOptions.workerSrc = `${PDFJS}/pdf.worker.min.js`;
  const pdf = await pdfjsLib.getDocument(src).promise;

  // Render at high resolution and let CSS scale it down, so text stays sharp
  // on high-DPI screens and when zooming in.
  const renderWidth = Math.max(viewer.clientWidth, 800) * Math.max(window.devicePixelRatio || 1, 2);

  viewer.innerHTML = '';
  for (let n = 1; n <= pdf.numPages; n++) {
    const page = await pdf.getPage(n);
    const base = page.getViewport({ scale: 1 });
    const viewport = page.getViewport({ scale: renderWidth / base.width });

    const wrap = document.createElement('div');
    wrap.className = 'cv-page';
    wrap.style.aspectRatio = `${base.width} / ${base.height}`;
    const canvas = document.createElement('canvas');
    canvas.width = Math.floor(viewport.width);
    canvas.height = Math.floor(viewport.height);
    wrap.appendChild(canvas);
    viewer.appendChild(wrap);
    await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;

    // Overlay the PDF's links, positioned in percent so they follow the page size.
    for (const a of await page.getAnnotations()) {
      if (a.subtype !== 'Link' || !a.url) continue;
      const [x1, y1, x2, y2] = base.convertToViewportRectangle(a.rect);
      const link = document.createElement('a');
      link.href = a.url;
      if (/^https?:/i.test(a.url)) {
        link.target = '_blank';
        link.rel = 'noopener';
      }
      link.setAttribute('aria-label', a.url);
      Object.assign(link.style, {
        left: `${(Math.min(x1, x2) / base.width) * 100}%`,
        top: `${(Math.min(y1, y2) / base.height) * 100}%`,
        width: `${(Math.abs(x2 - x1) / base.width) * 100}%`,
        height: `${(Math.abs(y2 - y1) / base.height) * 100}%`,
      });
      wrap.appendChild(link);
    }
  }
  viewer.dataset.rendered = 'true';
}

render().catch((err) => {
  console.error(err);
  viewer.innerHTML = `<p style="text-align: center;">The CV couldn't be displayed here. <a href="${src}">Open the PDF</a>.</p>`;
});
