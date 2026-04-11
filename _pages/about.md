---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Visiting Researcher at ETH Zürich, working with [Prof. April Wang](https://aprilwang.me/) in the **Programming, Education, and Computer-Human Interaction (PEACH) Lab**. Previously, I pursued my MS in Computer Engineering at Boğaziçi University under the supervision of [Prof. Suzan Üsküdarlı](https://www.cmpe.boun.edu.tr/tr/people/suzan.uskudarli), where I was involved with the **Complex Systems Research Lab (SoSLab)** and the **Cognitive Learning and Robotics (COLORS) Lab**. I also hold a BS in Mechanical Engineering from Boğaziçi University.

My work in **Human-Computer Interaction** focuses on emerging computational tools and spatial interfaces, with a strong emphasis on **Mixed Reality**. I am driven by the vision of democratizing highly complex skills. My research involves both designing novel interactive systems and investigating how users engage with them, exploring how learning can become a seamless and intuitive experience. I am particularly interested in how these interactive environments can intersect with **explainable AI** and **3D design and manufacturing**.

Featured Work
=====

{% include base_path %}

{% assign posts = site.publications | slice: 0, 1 %}
{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}

<p style="font-size: 14px;">Oğuz Arslan 2026</p>
