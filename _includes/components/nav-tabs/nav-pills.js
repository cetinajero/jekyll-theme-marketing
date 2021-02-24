<script type="text/javascript">
  jQuery(document).ready(function(){
    // Javascript to enable link to tab
    var url = document.location.toString();
    if (url.match('#')) {
        $('.nav-pills a[href="#' + url.split('#')[1] + '"]').tab('show');
    }

    // If this snippet is activated it will go down to the clicked tab and,
    // on a page refresh... it will remember the active tab.
    //
    // $('.nav-tabs a').on('shown.bs.tab', function (e) {
    //     window.location.hash = e.target.hash;
    // })

    // TODO: This snippet is to fix the offset of the header-wrapper when scrolling to an active tab,
    // but it is based on a landing page (one page website), we need to fix this and make it functional for a nab-tab page
    //
    // $('a[href*=#]:not([href=#])').click(function() {
    //   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    //       || location.hostname == this.hostname) {
    //
    //     var target = $(this.hash),
    //     headerHeight = $(".header-wrapper").height() + 5; // Get fixed header height
    //     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //
    //     if (target.length) {
    //       console.log(target.offset().top - headerHeight);
    //       $('html,body').animate({
    //         scrollTop: target.offset().top - headerHeight
    //       }, 500);
    //       return false;
    //     }
    //   }
    // });

  });
</script>
