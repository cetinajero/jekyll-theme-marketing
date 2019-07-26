---
published: true
title: Sitemap
permalink: /sitemap/
---
### PAGES
{% assign sorted_pages = site.html_pages | sort:"url" %}
{% for page in sorted_pages %}
- [ {{ page.title }} ]( {{ page.url | relative_url }} ) - {{ page.url }}
{% endfor %}
---
{% assign collections = site.collections %}
{% for collection in collections %}
### {{ collection.label | upcase }}
{% assign docs = collection.docs | sort:"url" %}
{% for doc in docs %}
- [ {{ doc.title }} ]( {{ doc.url | relative_url }} ) - {{ doc.url }}
{% endfor %}
---
{% endfor %}
