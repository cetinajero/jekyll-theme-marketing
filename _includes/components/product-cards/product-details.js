var img = new Image()
img.src = '{{ site.amazon-s3 }}{{ resource }}'

dummy = document
    .getElementById("product-details-footer")
    .getElementsByTagName('img')[{{ forloop.index0 }}]

async function updateHeight() {
    do {
        await new Promise(r => setTimeout(r, 1000));
        dummy.style.height = `${img.naturalHeight}px`
    } while (img.naturalHeight < 1)
}

updateHeight()
