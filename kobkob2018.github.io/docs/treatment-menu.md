---
layout: post
permalink: service-menu
title: תפריט טיפולים
---

{% assign odeven_treat = 'odd' %}

<div  class="services-menu-t" >

{% for service in site.services %}
     <div id="{{ service.name }}" class='service-tr-wrap'>
        <div class='service-tr  service-t-name {{odeven_treat}}'>
        <div class='service-td'>
           <a class="service item grow" href="{{service.permalink}}" title="{{service.title}}">
                {{ service.title }}
            </a>
        </div>
        </div>
        <div class='service-tr  service-t-desc {{odeven_treat}}'>
            <div class='service-td'> {{ service.description }}</div>
        </div>
        <div class='service-tr  service-t-details {{odeven_treat}}'>
            <div class='service-td service-timing'>משך הטיפול: <strong>{{ service.time }} דקות </strong></div>
            <div class='service-td service-price'>מחיר: <strong>{{ service.price }}ש"ח</strong></div>
        </div>
     </div>

    {% if odeven_treat == 'odd' %}
        {% assign odeven_treat = 'even' %}
    {% else %}
        {% assign odeven_treat = 'odd' %}
    {% endif %}

{% endfor %}

</div>

{% include phone-contact.html %}