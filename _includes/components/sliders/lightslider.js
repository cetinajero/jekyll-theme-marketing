<script type="text/javascript">
  jQuery('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop: true,
    slideMargin: 10,
    thumbItem: 4,

    galleryMargin: 5,
    thumbMargin: 5,

    onSliderLoad: function (el) {
      el.find('img').elevateZoom({
        zoomWindowFadeIn: 500,
        zoomWindowFadeOut: 500
      })
    }
  });
</script>
