---
title: Shop gift cards
permalink: /gift-cards/
resources:
  software:
    - name: { title: 'Gift Cards' }
      items:
        - { title: 'Mail a Gift Card', i18n: { es_MX: 'Envió de tarjeta de regalo', pt_BR: '' }, link: /mail/, img: /jekyll-theme-marketing/pages/support/gift-card/mail }
        - { title: 'Email a Gift Card', i18n: { es_MX: 'Envió de tarjeta de regalo por correo electrónico', pt_BR: '' }, link: /email/, img: /jekyll-theme-marketing/pages/support/gift-card/email }
        - { title: 'Check Your Balance', i18n: { es_MX: 'Checa tu estado de cuenta', pt_BR: '' }, link: /balance/, img: /jekyll-theme-marketing/pages/support/gift-card/balance }
---
<div class="container programming-software">
  {% for category in page.resources.software %}
    <h4 class="pt-4">{{ category.name.i18n[site.lang] | default: category.name.title }}</h4>
    <div class="row">
      {% for item in category.items %}
        <div class="col-6 col-md-4 col-lg-3">
          <div>
            <a href="{{ item.link | prepend: '/gift-cards' | relative_url }}">
              <img class="product-image" src="{{ site.amazon-s3 }}/assets/img{{ item.img | append: '.png' }}" alt="{{ item.i18n[site.lang] | default: item.title }}"/>
            </a>
          </div>
          <div class="product-model">
            <a href="{{ item.link | prepend: '/programming-software' }}">{{ item.i18n[site.lang] | default: item.title }}</a>
          </div>
        </div>
      {% endfor %}
    </div>
  {% endfor %}
</div> <!-- /container -->
