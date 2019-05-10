// init Isotope
var $grid = $('[data-layout="grid"]').isotope({
  // options
  itemSelector: '[data-component="product-cards/progressive"]',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  priceGreaterThan3000: function() {
    var number = $(this).find('.product-price').text().replace('$ ','').replace(' USD','');
    return parseInt( number, 10 ) > 3000;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.description').text();
    return name.match( /Telefono/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
