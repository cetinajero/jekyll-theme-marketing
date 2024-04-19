{% if site.google-tag %}
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={{ site.google-tag }}"></script>
  <script type="text/javascript">
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', '{{ site.google-tag }}');
  </script>
  <!-- End Google Tag -->
{% endif %}
