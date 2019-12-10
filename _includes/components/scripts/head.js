<script src="{{ '/assets/node_modules/@fortawesome/fontawesome-free-brands/index.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/@fortawesome/fontawesome-free-regular/index.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/@fortawesome/fontawesome-free-solid/index.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/@fortawesome/fontawesome/index.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/jquery/dist/jquery.min.js' | relative_url }}"></script>

<script src="{{ '/assets/vendors/revolution-slider/js/jquery.themepunch.tools.min.js' | relative_url }}" type="text/javascript"></script>
<script src="{{ '/assets/vendors/revolution-slider/js/jquery.themepunch.revolution.min.js' | relative_url }}" type="text/javascript"></script>

<script src="{{ 'assets/node_modules/lightslider/dist/js/lightslider.min.js' | relative_url }}"></script>

{% if site.zendesk %}
  {% include components/zendesk/script.js %}
{% endif %}
