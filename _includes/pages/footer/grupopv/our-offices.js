<script>
  function getLatlng(id) {
    address = document.getElementById(id);
    url = address.children[1].children[4].getAttribute('src');

    address.setAttribute(
      'data-coordinates',
      url
        .replace(/^.*!3d/,'')
        .replace(/![23]m[23].*/,'')
      + ', ' +
      url
        .replace(/^.*!2d/,'')
        .replace(/!3d.*/,'')
    );
  }

  var iframes_count = document.querySelectorAll(".branch-info").length;
  for (i = 1; i <= iframes_count; i++) {
    getLatlng('branch-' + i + '-info');
  }
</script>
