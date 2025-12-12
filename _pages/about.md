---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Master's student in the Computer Engineering Department at [Bogazici University](https://bogazici.edu.tr/en) under the supervision of [Prof. Suzan Üsküdarlı](https://www.cmpe.boun.edu.tr/tr/people/suzan.uskudarli). I am currently involved in the [Complex Systems Research Lab (SoSLab)](http://soslab.cmpe.boun.edu.tr/) and the [Cognitive Learning and Robotics (COLORS) Lab](https://colors.cmpe.boun.edu.tr/).

My research interests include HCI, mixed reality, explainable AI, GNNs, computer-aided design and manufacturing, and sports analytics.

I received my BS degree from Mechanical Engineering Department at [Bogazici University](https://bogazici.edu.tr/en). My graduation project was completed under the supervision of [Prof. Hasan Bedir](https://me.bogazici.edu.tr/tr/hasan-bedir).

Featured Work
=====

{% include base_path %}

{% assign posts = site.publications | slice: 0, 1 %}
{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}

<p style="font-size: 14px;">Oğuz Arslan 2025</p>
