---
layout: home
title: Home

featured-products:
  - img: "565396f"
    product: "Chuck Taylor All Star Exploding Star High Top"
    text: "When it comes to major star appeal, look no further than these vibrantly colored Chucks. An exploding star graphic brings standout style to classic and comfortable canvas."
    href: "/shoes-woman/high/565396f/"

  - img: "563512f"
    product: "Chuck Taylor All Star Madison Mid"
    text: "Amp up the comfort with cushioned and structured Chucks. With padding on the collar, heel and tongue, they've got everything you need to keep going."
    href: "/shoes-woman/mid/563512f/"

  - img: "564995c"
    product: "Chuck Taylor All Star Rainbow Platform Low Top"
    text: "Paneled canvas and a colorblocked midsole bring a vibrant edge to your everyday Chucks, while a platform sole gives you a boost. Stand tall."
    href: "/shoes-woman/platform/564995c/"

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
    href: "/shoes-woman/"

  - collection: shoes-woman
    id: "VZ-30-G6-4"
    model: "VZ-30-G6-4"
    desc: "Radio portatil analogo Vertex VZ-30 32 Ch 4 Watts"
    img: "/radios/vertex-standard/portable/vz-30/vz-30.png"
    brand: "Vertex"
    commercial: "VZ-30 + auricular y funda"
    href: "/radios/vertex-standard/portable/vz-30/vz-30-g6-4/"

  - collection: shoes-woman
    id: "vlr"
    model: "VLR150"
    desc: "6 Radios VLR150 + Multicargador"
    img: "/radios/motorola/analog/portable/vlr150/vlr150_cargador.png"
    brand: "Vertex"
    commercial: "6 Radios VLR150 + Multicargador"
    href: "/radios/motorola/analog/portable/vlr150/cu1464bke4aa/"

brand-panel:
  title: Conoce nuestras marcas
  text: Da clic sobre la marca para mayor información
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
{% include components/sliders/revolution-slider.html %}

<section class="pt-3">
  {% include components/product-cards/featured-product.html %}
</section>

<section class="pt-5">
  {%  include components/jumbotron/bootstrap.html
      title="Where to buy?"
      desc="Find the store closest to your location with our partner finder map."
      button='<i class="fas fa-search"></i> Search'
      href="/"
      img="shops"
  %}
</section>

<section class="container-fluid pt-4">
  {% include components/info-cards/card-deck.liquid %}
</section>

<section class="container-fluid pt-5">
  <div class="row">
    <article class="col-12 col-md-auto">
      {% include components/social-media/facebook.liquid %}
    </article>
    <article class="col-12 col-md pt-5 pt-md-0">
      {%  include components/videos/background.liquid
          video="unv"
          title="CONVERSE RENEW CANVAS"
          button="Buy the collection"
          href="/"
      %}
    </article>
  </div>
</section>

<section class="container pt-3 pb-5">
  {% include components/panels/brands.liquid %}
</section>
