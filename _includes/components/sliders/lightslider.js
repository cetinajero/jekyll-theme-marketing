jQuery('#lightSlider').lightSlider({
  gallery: true,
  item: 1,
  loop: true,
  slideMargin: 10,
  thumbItem: 4,

  galleryMargin: 5,
  thumbMargin: 5
});

window.addEventListener('load',initElevateZoom)
window.addEventListener('resize',initElevateZoom)

function initElevateZoom() {
  const images = jQuery('#lightSlider').find('img')
  const windowWidth = window.innerWidth
  const imgNatWidth = images[0].naturalWidth

  const minImgNatWidth = 700

  const desktopOptions = {
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 500
  }

  const mobileOptions = {
    zoomType: 'inner',
    cursor: 'crosshair'
  }

  if (imgNatWidth >= minImgNatWidth) {
    if (windowWidth < 768)
      responsiveElevateZoom(images, mobileOptions)
    else
      images.elevateZoom(desktopOptions)
  }
}

function responsiveElevateZoom(images, mobileOptions) {
  var zoomContainerWidth

  try {
    zoomContainerWidth = document.querySelector('.zoomContainer').style.width
  } catch {}
  
  switch (zoomContainerWidth) {
    case '210px':
    case '289.984375px':
    case '350px':
      setTimeout(function(){
        images.elevateZoom(mobileOptions)
      }, 500)
      break;
    default:
      images.elevateZoom(mobileOptions)
  }
}
