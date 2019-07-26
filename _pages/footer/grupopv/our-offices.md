---
published: true
title: Our offices
permalink: /our-offices/
excerpt: none
---
{% if site.address.size == 1 %}
  {% assign classes = "col-sm-12 col-md-12" %}
{% else %}
  {% assign classes = "col-sm-6 col-md-6" %}
{% endif %}

<div class="container our-offices">
  <div class="row">

    {% for address in site.address %}
      <div class="col-12 {{ classes }}" id="branch-{{ forloop.index }}-info">
        <strong>{{ address.name }}</strong>
        <div class="branch-info mt-2 mb-4">
          <p>
            <span>{{ address.street }}</span>
            <span>{{ address.block }}</span>
            <span>{{ address.city }}</span>
            <span>{% if address.zip %}{{ site.data.i18n.common.pages[site.lang].zip_code.title }} {% endif %}{{ address.zip }}</span>
          </p>
          <p>
            {% if address.phone %}<span>{{ site.data.i18n.common.pages[site.lang].phone.title | default: 'Phone' }}:</span>{% endif %}
              {% for phone in address.phone %}
                <span>{{ phone.department }} <a href="tel:{{ phone.number }}">{{ phone.number }}</a></span>
              {% endfor %}
          </p>
          <p>
            {% if address.email %}
              E-mail:
              <a href="mailto:{{ address.email }}">{{ address.email }}</a>
            {% endif %}
          </p>
          <p>{{ address.custom-html }}</p>
          <iframe
            width="100%"
            height="322"
            style="border: 0px none;"
            frameborder="0"
            allowfullscreen="allowfullscreen"
            src="{{ address.google-maps }}">
          </iframe>
        </div>
      </div>
    {% endfor %}

  </div>
</div> <!-- /container -->

{% include pages/footer/grupopv/our-offices.js %}
