---
layout: page
permalink: news
title: News
---

{% assign odeven_treat = 'odd' %}


## OK This page is under construction

basicaly, I am looking for a way to embed posts from dev.to


<div  class="news-menu-t" >

{% for newpost in site.data.mynews %}
     <div id="{{ newpost.name }}" class='newpost-tr-wrap'>
       ---
     </div>
{% endfor %}
</div>

{% include phone-contact.html %}