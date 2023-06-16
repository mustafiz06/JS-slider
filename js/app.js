const images = [
    "img/1.jpg",
    "img/img-2.jpg",
    "img/img-3.jpg",
    "img/img-4.jpg",
    "img/img-5.jpg"
]
let imgIndex = 0;
const img = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0
    }
    const imgLink = images[imgIndex];
    // console.log(imgLink)
    img.setAttribute('src', imgLink)
    imgIndex++
}, 1500)