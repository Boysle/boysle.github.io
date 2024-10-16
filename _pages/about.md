---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a Master's student in the [Computer Engineering Department](https://www.cmpe.boun.edu.tr/) at [Bogazici University](https://bogazici.edu.tr/en_US) under the supervision of [Prof. Suzan Üsküdarlı](https://www.cmpe.boun.edu.tr/tr/people/suzan.uskudarli). I am currently involved in the [Complex Systems Research Lab (SoSLab)](http://soslab.cmpe.boun.edu.tr/) and the [Cognitive Learning and Robotics (COLORS) Lab](https://colors.cmpe.boun.edu.tr/).

My research interests include graph neural networks, sports analytics, HCI, mixed reality, and computer-aided design and manufacturing.

I received my BS degree from [Mechanical Engineering Department](http://www.me.boun.edu.tr/) at [Bogazici University](https://bogazici.edu.tr/en_US). My graduation project was completed under the supervision of [Prof. Hasan Bedir](http://me.boun.edu.tr/?q=users/hasan-bedir).

Featured Projects
=====

{% include base_path %}

{% assign posts = site.portfolio | slice: 0, 3 %}
{% for post in posts %}
  {% include archive-single.html %}
{% endfor %}

<p style="font-size: 14px;">I am working on updating my website!</p>
