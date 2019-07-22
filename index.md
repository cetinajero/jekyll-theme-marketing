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
    product: "Chuck Taylor All Star explotando estrella alta superior"
    text: "Cuando se trata de un atractivo estrella, no busque más que estos mandriles de colores vibrantes. Un gráfico estelar explosivo aporta un estilo destacado al lienzo clásico y cómodo."
    href: "/jekyll-theme-marketing/shoes-woman/high/565396f/"

  - img: "563512f"
    product: "Chuck Taylor All Star madison mediados"
    text: "Amplifica el confort con mandriles amortiguados y estructurados. Con acolchado en el cuello, el talón y la lengua, tienen todo lo que necesitas para seguir adelante."
    href: "/jekyll-theme-marketing/shoes-woman/mid/563512f/"

  - img: "564995c"
    product: "Chuck Taylor All Star plataforma arcoiris baja"
    text: "El lienzo con paneles y una entresuela de bloques de colores brindan una ventaja vibrante a tus Chucks cotidianos, mientras que la suela de plataforma te da un impulso. Estar de pie."
    href: "/jekyll-theme-marketing/shoes-woman/platform/564995c/"

info-cards:
  - title: "Quien es CONVERSE"
    desc: "Nuestra ropa y zapatillas deportivas son usadas por rebeldes, rockeros, raperos, artistas, soñadores, pensadores y originales. Celebramos la individualidad. Si eres único en su clase, deberías probarnos."
    button: "Ver valores"
    href: "/values/"
    animation: "fadeInLeft"
    img: values

  - title: "IMPACTO EN LA COMUNIDAD"
    desc: "Nos esforzamos por tener un impacto positivo para las comunidades en las que vivimos y trabajamos."
    button: "Ver más"
    href: "/community-impact/"
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
    href: "/jekyll-theme-marketing/shoes-woman/"

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
      desc="Encuentra la tienda más cercana a tu localidad"
      button='<i class="fas fa-search"></i> Buscar'
      href="/shops/"
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
          title="Ediciones especiales"
          desc="Elige los que más vayan contigo"
          button='<i class="fas fa-star"></i> Ver contenido'
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
      button="Compra la colección"
      href="/renew/"
  %}
</section>
---
