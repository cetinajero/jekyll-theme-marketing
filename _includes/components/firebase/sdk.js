<script src="{{ '/assets/node_modules/firebase/firebase-app.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/firebase/firebase-auth.js' | relative_url }}"></script>
<script src="{{ '/assets/node_modules/firebase/firebase-firestore.js' | relative_url }}"></script>

<script src="{{ '/assets/js/firebase/firebase-sdk.js' | relative_url }}"></script>

{% if site.original %}
  <script src="{{ '/assets/js/firebase/firebase-login.js' | relative_url }}"></script>
{% endif %}
