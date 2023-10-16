---
published: true
title: Downloads section
permalink: /downloads/

filters:
  - title: Marca
    genre: Todas
    options:
    - title: Maverick
      filter:
        target: find('.brand').text().toLowerCase()
        rule: target.match(/maverick/)
    - title: Motorola
      filter:
        target: find('.brand').text().toLowerCase()
        rule: target.match(/motorola/)
    - title: Vertex Standard
      filter:
        target: find('.brand').text().toLowerCase()
        rule: target.match(/vertex/)

  - title: Tecnología
    genre: Todas
    options:
    - title: Análogo
      filter:
        target: find('.technology').text().toLowerCase()
        rule: target.match(/análogo/)
    - title: Digital
      filter:
        target: find('.technology').text().toLowerCase()
        rule: target.match(/digital/)

  - title: Categoría
    genre: Todas
    options:
    - title: Firmware
      filter:
        target: find('.category').text().toLowerCase()
        rule: target.match(/firmware/)
    - title: Manual
      filter:
        target: find('.category').text().toLowerCase()
        rule: target.match(/manual/)
    - title: Software
      filter:
        target: find('.category').text().toLowerCase()
        rule: target.match(/software/)
---
<script src="{{ '/assets/node_modules/isotope-layout-npm-3.0.6-ae267b8579/node_modules/isotope-layout/dist/isotope.pkgd.min.js' | relative_url }}"></script>

{% include components/spinners/bootstrap.html %}

<div id="isotope" class="d-none">
  {% include components/filters/isotope.liquid %}
</div>

<script type="text/javascript">
  {% include components/apps/downloads.js %}
</script>
