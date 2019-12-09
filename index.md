---
#
# You don't need to edit this file, it's empty on purpose.
# Edit jekyll-theme-marketing's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
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

---
{% include components/sliders/revolution-slider.html %}

<section class="pt-3">
  {% include components/product-cards/featured-product.html %}
</section>

<section class="pt-5">
  {%  include components/jumbotron/bootstrap.html
      desc="Find the store closest to your location"
      button='<i class="fas fa-search"></i> Search'
      href="/"
      img="shops"
  %}
</section>

<section class="container-fluid pt-3">
  <div class="row">
    <article class="col-12 col-md-auto">
      {% include components/social-media/facebook.html %}
    </article>
    <article class="col-12 col-md pt-5 pt-md-0">
      {%  include components/jumbotron/bootstrap.html
          title="Special edition"
          desc="Choose the ones that go with you the most"
          button='<i class="fas fa-star"></i> See content'
          href="https://www.converse.com/shop/galaxy-styles"
          img="special-edition"
      %}
    </article>
  </div>
</section>

<section class="container-fluid pt-5">
  {% include components/info-cards/card-deck.html %}
</section>

<section class="pt-5 pb-5" data-appear-animation="fadeInUp">
  {%  include components/videos/background.html
      video="renew.gif"
      background="renew.mp4"
      title="CONVERSE RENEW CANVAS"
      button="Buy the collection"
      href="/"
  %}
</section>
---
