<script>
  var items = $('#breadcrumb > li.breadcrumb-item');
  if (items.length > 3){
    if (items.length > 4) $('li.breadcrumb-item.ellipsis').removeClass('d-none').addClass('d-xs-inline d-md-none');
    if (items.length > 5) $('li.breadcrumb-item.ellipsis').removeClass('d-md-none').addClass('d-lg-none');
    items.each(function( index ) {
      if (index > 1 && index < items.length) if (index != items.length-2) $(this).addClass('d-none d-md-inline');
      if (index > 1 && index < items.length-3) $(this).removeClass('d-md-inline').addClass('d-lg-inline');
    });
  }
</script>
