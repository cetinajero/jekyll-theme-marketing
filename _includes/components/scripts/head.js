<script src="{{ '/assets/node_modules/@fortawesome/fontawesome-free-brands/index.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/@fortawesome/fontawesome-free-regular/index.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/@fortawesome/fontawesome-free-solid/index.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/@fortawesome/fontawesome/index.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/jquery/dist/cdn/jquery.min.js' | relative_url }}"></script>

<script src="/vendors/sliders/revolution-slider/js/jquery.themepunch.tools.min.js" type="text/javascript"></script>
<script src="/vendors/sliders/revolution-slider/js/jquery.themepunch.revolution.min.js" type="text/javascript"></script>

<script src="{{ 'assets/node_modules/lightslider/dist/js/lightslider.min.js' | relative_url }}"></script>

{% if site.zendesk %}
  {% include components/zendesk/script.js %}
{% endif %}
