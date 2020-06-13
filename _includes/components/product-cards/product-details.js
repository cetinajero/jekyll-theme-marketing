var img = new Image()
img.src = '{{ site.amazon-s3 }}{{ resource }}'

dummy = document
    .getElementById("product-details-footer")
    .getElementsByTagName('img')[{{ forloop.index0 }}]

dummy.style.height = `${img.naturalHeight}px`
