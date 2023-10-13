// store filter for each group
var filters = {};

// init Isotope
var $grid = $('{{ include.container }}').isotope({
  itemSelector: '{{ include.items }}',
  filter: function() {

    var isMatched = true;
    var $this = $(this);

    for ( var prop in filters ) {
      var filter = filters[ prop ];
      // use function if it matches
      filter = filterFns[ filter ] || filter;
      // test each filter
      if ( filter ) {
        isMatched = isMatched && $(this).is( filter );
      }
      // break if not matched
      if ( !isMatched ) {
        break;
      }
    }
    return isMatched;
  }
});

$('#filters').on( 'click', '.btn', function() {
  var $this = $(this);
  // get group key
  var $buttonGroup = $this.parents('.btn-group-vertical');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $this.attr('data-filter');
  // arrange, and use filter fn
  $grid.isotope({{ include.options }});
});

// change is-checked class on buttons
$('.btn-group-vertical').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});
