---
layout: home
title: Home

featured-products:
  - img: "565396f"
    product: "Chuck Taylor"
    text: "1st card Chuck Taylor All Star Exploding Star High Top"
    href: "/shoes-woman/high/565396f/"
    links:
      - { name: "Chuck Taylor", href: '/shoes-woman/mid/563512f/' }
      - { name: "All Star", href: '/shoes-woman/mid/563512f/' }
      - { name: "All Star", href: '/shoes-woman/mid/563512f/' }
      - { name: "All Star", href: '/shoes-woman/mid/563512f/' }

  - img: "563512f"
    product: "All Star"
    href: "/shoes-woman/mid/563512f/"

  - img: "564995c"
    product: "Rainbow"
    href: "/shoes-woman/platform/564995c/"

  - img: "565396f"
    product: "Exploding"
    href: "/shoes-woman/high/565396f/"

  - img: "564995c"
    product: "Rainbow Platform"
    href: "/shoes-woman/platform/564995c/"
    
  - img: "565396f"
    product: "Exploding Star"
    href: "/shoes-woman/high/565396f/"
    
  - img: "565396f"
    product: "Chuck Taylor"
    href: "/shoes-woman/high/565396f/"
    
  - img: "565396f"
    product: "Exploding Star"
    href: "/shoes-woman/high/565396f/"

parallax:
  - collection: "shoes-woman"
    img: "motorola"
    button: "Motorola"
    url: "/shoes-woman/"
    style: "text-justify"
    title: "Parallax Demo"
    desc: "Parallax scrolling is a web site trend where the background content is moved at a different speed than the foreground content while scrolling. Nascetur per nec posuere turpis, lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus, blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi, morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede, nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor, nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar, in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate, non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit, maecenas ante augue etiam maecenas, porta porttitor placerat leo."

  - collection: "shoes-man"
    img: "airbus"
    button: "Airbus"
    url: "/shoes-man/"
    desc: "Scroll up and down to really get the feeling of how Parallax Scrolling works."

  - collection: "pages"
    img: "hytera"
    button: "Hytera"
    url: "/values/"

info-cards:
  - title: "About CONVERSE"
    desc: "Our clothes and sneakers get worn by rebels, rockers, rappers, artists, dreamers, thinkers and originals. We celebrate individuality. If you’re one-of-a-kind, you should try us on."
    button: "Our Culture"
    href: "/values/"
    animation: "fadeInLeft"
    img: values

  - title: "Community Impact"
    desc: "We strive to make a positive impact for the communities in which we live and work."
    button: "Ver más"
    href: "/"
    animation: "fadeInUp"
    img: community-impact

special-offers:
  - collection: shoes-woman
    id: "LAH01JDC9JA2AN"
    model: "LAH01JDC9JA2AN"
    desc: "Radio portatil DEP 450 Motorola Digital y Análogo"
    img: "/radios/motorola/digital/portable/dep450/dep450.png"
    brand: "Motorola"
    commercial: "DEP 450"
    href: "/shoes-man/high/565396f/#special-offers"

  - collection: shoes-woman
    id: "VZ-30-G6-4"
    model: "VZ-30-G6-4"
    desc: "Radio portatil analogo Vertex VZ-30 32 Ch 4 Watts"
    img: "/radios/vertex-standard/portable/vz-30/vz-30.png"
    brand: "Vertex"
    commercial: "VZ-30 + auricular y funda"
    href: "/shoes-man/high/565396f/#special-offers"

  - collection: shoes-woman
    id: "vlr"
    model: "VLR150"
    desc: "6 Radios VLR150 + Multicargador"
    img: "/radios/motorola/analog/portable/vlr150/vlr150_cargador.png"
    brand: "Vertex"
    commercial: "6 Radios VLR150 + Multicargador"
    href: "/shoes-man/high/565396f/#special-offers"

brand-panel:
  title: Conoce nuestras marcas
  text: Da clic sobre la marca para mayor información
  animation:
    speed: 40
  brands:
    - { name: "Michel", href: '/', img: 'michel' }
    - { name: "Edgar", href: '/', img: 'edgar' }
    - { name: "Danya", href: '/', img: 'danya' }
    - { name: "Nadia", href: '/', img: 'nadia' }
    - { name: "Efren", href: '/', img: 'efren' }
    - { name: "Buenos días", href: '/', img: 'buenos-dias' }
    - { name: "064", href: '/', img: '064' }
    - { name: "068", href: '/', img: '068' }
---
{% include components/collections/active.liquid %}

<section class="pt-3 d-none d-lg-block">
  {% include components/product-cards/featured-product.liquid %}
</section>

{% include components/sliders/revolution-slider.liquid %}

<section class="pt-3">
  {% include components/info-cards/customers-intro.liquid %}
</section>

<section class="pt-5">
  {%  include components/jumbotron/bootstrap.liquid
      title="Where to buy?"
      desc="Find the store closest to your location with our partner finder map."
      button='<i class="fas fa-search"></i> Search'
      href="/"
      img="shops"
  %}
</section>

<section class="pt-3">
  {% include components/parallax/sections.liquid %}
</section>

<h3 class="post pt-4">Promociones</h3>
<div class="container marketing-theme clean-view">
  <div class="row">
    {% for special-offer in page.special-offers %}
      {% for collection-type in site.defaults %}
        {% if collection-type.scope.type == special-offer.collection %}
          {% if collection-type.values.published == true and site.links.special-offers[special-offer.id].disabled == null -%}
            <div class="marketing-theme content-centered col-md-4 col-lg-3 {{ special-offer.model }}">
              {% assign special-offer-img = special-offer.img | prepend: 'https://grupopv-public.s3.amazonaws.com/assets/img/catalog/thumbnails' %}
              {%  include components/product-cards/3d-space.liquid
                  id=special-offer.id
                  model=special-offer.model
                  desc=special-offer.desc
                  img=special-offer-img
                  brand=special-offer.brand
                  commercial=special-offer.commercial
                  href=special-offer.href
              %}
            </div>
          {% endif %}
        {% endif %}
      {% endfor %}
    {% endfor %}
  </div>
</div> <!-- /container -->

<section class="container-fluid pt-2">
  {% include components/info-cards/card-deck.liquid %}
</section>

<section class="container-fluid pt-5">
  <div class="row">
    <article class="col-12 col-md-auto">
      {% include components/social-media/facebook.liquid %}
    </article>
    <article class="col-12 col-md pt-5 pt-md-0">
      {%  include components/videos/background.liquid
          video="tph900"
          title="CONVERSE RENEW CANVAS"
          button="Buy the collection"
          href="/"
          padding-y="189px"
      %}
    </article>
  </div>
</section>

<section class="container pt-3 pb-5">
  {% include components/carousels/infinite.liquid %}
</section>
