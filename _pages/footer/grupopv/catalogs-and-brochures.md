---
published: true
title: Catalogs & brochures
permalink: /catalogs-and-brochures/
excerpt: none
tabs:
  - name: Catalogs
    component: nav-tabs/vertical-pills
    params:
      vertical-tabs: 
        - name: 2021
          component: panels/catalogs
          params:
            catalogs:
              - id: 2020
                link: https://online.fliphtml5.com/ggpn/bkmz/
                pdf_folder: radios
              - id: 2021
                link: https://online.fliphtml5.com/ggpn/kwmc/
                pdf_folder: radios
        - name: 2022
          component: panels/catalogs
          params:
            catalogs:
              - id: 2022
                link: https://online.fliphtml5.com/ggpn/kwmc/
                pdf_folder: radios
              - id: 2023
                link: https://online.fliphtml5.com/ggpn/bkmz/
                pdf_folder: radios
  - name: Brochures
    component: panels/brochures
brochures:
  -
    name: radios
    label: Brochures
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
<div class="container">
  {% include components/nav-tabs/nav-pills.liquid tabs=page.tabs %}
</div>
