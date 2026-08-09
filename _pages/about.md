---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Visiting Researcher at ETH Zürich, working with **[Prof. April Wang](https://aprilwang.me/)** in the **Programming, Education, and Computer-Human Interaction (PEACH) Lab**. Previously, I pursued my MS in Computer Engineering at Boğaziçi University under the supervision of **[Prof. Suzan Üsküdarlı](https://uskudarli.gitlab.io/uskudarli-academic/)**, where I was involved with the **Complex Systems Research Lab (SoSLab)** and the **Cognitive Learning and Robotics (COLORS) Lab**. I also hold a BS in Mechanical Engineering from Boğaziçi University.

My work focuses on **Human-Computer Interaction**, with a strong emphasis on **Mixed Reality**. I am driven by the vision of democratizing highly complex skills for novices. My research involves both designing novel interactive systems and investigating how users engage with them, exploring how learning can become a seamless and intuitive experience. I am particularly interested in how these interactive environments can intersect with **embodied learning** and **3D design and fabrication**.

Featured Work
=====

{% include base_path %}

{% assign posts = site.publications | slice: 0, 1 %}
{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}

