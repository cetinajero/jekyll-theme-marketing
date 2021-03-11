jQuery('#lightSlider').lightSlider({
  gallery: true,
  item: 1,
  loop: true,
  slideMargin: 10,
  thumbItem: 4,

  galleryMargin: 5,
  thumbMargin: 5,

  onSliderLoad: function (el) {
    initElevateZoom()
  }
});

window.addEventListener('resize',initElevateZoom)

function initElevateZoom() {
  img = jQuery('#lightSlider').find('img')

  const minNatWidth = 700
  const natWidth = (img[0].naturalWidth)

  if (natWidth >= minNatWidth) {
    img.elevateZoom({
      zoomWindowFadeIn: 500,
      zoomWindowFadeOut: 500
    })
  }
}
