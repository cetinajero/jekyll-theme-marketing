const images = Array.from(
    document
        .getElementById("product-details-footer")
        .getElementsByTagName('div')
)

async function updateHeight(image) {
    do {
        var dummy = image.getElementsByTagName('img')[0]
        var img = new Image()
        img.src = image.style.backgroundImage.split('"')[1]

        await new Promise(r => setTimeout(r, 1000));
        height = img.naturalHeight * dummy.clientWidth / 800
        dummy.style.height = `${height}px`
        console.log(`${dummy.clientWidth}px x ${height}px`)
    } while (img.naturalHeight < 1)
}

function updateCatalogImagesHeight() {
    images.forEach(image => 
        updateHeight(image)
    );
}

window.addEventListener('resize', updateCatalogImagesHeight)

updateCatalogImagesHeight()
