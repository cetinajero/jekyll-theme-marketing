<script type="text/javascript">

  function getQueryParamsVariable(variable) {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get(variable) ? urlParams.get(variable) : '';
    return decodeURIComponent(query.replace(/\+/g, ' '));
  }

  function generateData(){
    return [
      {% for collection in site.collections %}
        {% for page in collection.docs %}
          {
            "id": "{{ page.url | slugify }}",
            "title": "{{ page.title | xml_escape }}",
            "brand": "{{ page.brand | xml_escape }}",
            "description": "{{ page.description | xml_escape }}",
            "commercial": "{{ page.commercial | xml_escape }}",
            "categories": "{{ page.categories | join: ' ' | replace: '-', ' ' }}",
            "content": {{ page.content | strip_html | strip_newlines | jsonify }},
            "url": "{{ page.url | xml_escape }}",
            "spec-sheets-text": "{{ page.resources.spec-sheets.text | join: ' ' | replace: '"', '' }}",
            "spec-sheets-specs": "{{ page.resources.spec-sheets.specs | join: ' ' | replace: '{"name"=>"', '' | replace: '"', ' ' }}",
          },
        {% endfor %}
      {% endfor %}
    ];
  }

  function excludedDocs(id) {
    var excludedIds = [
      "sitemap",
    ]
    return excludedIds.includes(id);
  }

  function indexData(documents) {
    return lunr(function () {
      this.ref('id')
      this.field('title', { boost: 10 })
      this.field('brand', { boost: 2 })
      this.field('description', { boost: 5 })
      this.field('commercial', { boost: 7 })
      this.field('categories', { boost: 5 })
      this.field('content')
      this.field('url', { boost: 5 })
      this.field('spec-sheets-text')
      this.field('spec-sheets-specs')

      documents.forEach(function (doc) {
        if ( !excludedDocs(doc.id) ) { this.add(doc) }
      }, this)
    })
  }

  function wildcardsQuery(query) {
    return `*${query.replace(' ', '* *')}*`;
  }

  function fuzzyMatchQuery(query, distance) {
    return query.replace(' ', `~${distance} `) + `~${distance}`;
  }

  function searchResults(query) {
    var documents = generateData();
    var idx = indexData(documents);
    var querys = [
      query,
      wildcardsQuery(query),
      fuzzyMatchQuery(query, 1),
      fuzzyMatchQuery(query, 2),
    ];

    for (var i = 0; i < querys.length; i++) {
      var results = idx.search(querys[i]); // Get lunr to perform a search
      if (results.length) { console.log(`${querys[i]}`); break; }
    }

    setTimeout(function(){
      displayResults(documents, results); // We'll write this in the next section
      document.querySelector(".spinner-border").classList.add('d-none');
    }, 500);
  }

  function displayResults(documents, results) {
    const searchResults = document.getElementById('search-results');
    if (results.length) { // Are there any results?
      var appendString = '';
      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        if ( i >= 50 ) { break; }
        var item = documents.find(x => x.id === results[i].ref);
        appendString += `{% include components/info-cards/search-results.html %}`;
      }
      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No se encontraron resultados</li>';
    }
  }

  function startApp() {
    document.getElementById("search").classList.add("d-none");
    const query = getQueryParamsVariable('q');
    if (query) {
      document.getElementById('search-box').setAttribute("value", query);
      document.getElementById('mod-search-searchword').setAttribute("value", query);
      searchResults(query);
    } else {
      document.querySelector(".spinner-border").classList.add('d-none');
    }
  }

  startApp();

</script>
