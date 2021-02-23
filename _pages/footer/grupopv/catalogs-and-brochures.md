---
published: true
title: Catálogos y folletería
permalink: /catalogs-and-brochures/
excerpt: none
assets:
  -
    name: radios
    label: Folletería
    brochures:
      -
        brand: vertex-standard
        technology: analog
        categories: portable
        model: vz-30
      -
        brand: vertex-standard
        technology: analog
        categories: portable
        model: vz-30-restaurante
      -
        brand: motorola
        technology: analog
        categories: portable/ep350mx
        model: ep350mx
      -
        brand: motorola
        technology: analog
        categories: portable/ep350mx
        model: ep350mx-keyboard
---

<div>
<hr>
<nav>
  <div class="nav nav-pills nav-justified flex-column flex-sm-row" role="tablist">
    <a class="nav-item nav-link active" data-toggle="tab" href="#catalogs" role="tab" aria-controls="catalogs" aria-selected="true">
      Catálogos
    </a>
    <a class="nav-item nav-link " data-toggle="tab" href="#brochures" role="tab" aria-controls="brochures" aria-selected="false">
      Folletería
    </a>
  </div>
</nav>
<hr>

<div class="tab-content">
  <div class="tab-pane fade show active" id="catalogs" role="tabpanel" aria-labelledby="catalogs-tab">
    <div class="container">
      {% include components/collapse/list-accordion.html %}
    </div>
  </div>

  <div class="tab-pane fade show" id="brochures" role="tabpanel" aria-labelledby="brochures-tab">
    <div class="container">
      {% for category in page.assets %}
        <h4>{{ category.label }}</h4>
        <div class="row">
          {% for brochure in category.brochures %}
            {% if brochure.brand %}
              {% assign brochure-brand = brochure.brand | prepend: '/' %}
            {% else %}
              {% assign brochure-brand = '' %}
            {% endif %}
            {% if site.links.brochures[brochure.model].disabled == null %}
              <div class="col-6 col-md-4 col-lg-3 pb-4">
                <a class="d-block mb-3" href="{{ site.amazon-s3 }}/assets/pdf/documents/brochures/{{ site.domain | replace:'.',' ' | truncatewords: 1,"" }}/{{ category.name }}{{ brochure-brand }}/{{ brochure.model }}.pdf" target="_blank">
                  <img class="product-image" src="{{ site.amazon-s3 }}/assets/img/catalog/thumbnails/{{ category.name }}{{ brochure-brand }}/{{ brochure.technology }}/{{ brochure.categories }}/{{ brochure.model }}.png" alt="{{ brochure.model }}" />
                </a>
                <a class="d-block text-primary text-decoration-none text-center font-weight-bold" href="{{ site.amazon-s3 }}/assets/pdf/documents/brochures/{{ site.domain | replace:'.',' ' | truncatewords: 1,"" }}/{{ category.name }}{{ brochure-brand }}/{{ brochure.model }}.pdf">
                  {{ brochure.model | upcase }}
                </a>
                <div class="text-center text-uppercase">
                  {{ brochure.brand }}
                </div>
              </div>
            {% endif %}
          {% endfor %}
        </div>
      {% endfor %}
    </div> <!-- /container -->
  </div>
</div>
