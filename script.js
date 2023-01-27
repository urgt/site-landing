
function imgToVideo(element) {
    console.log(1)
    element.innerHTML = `<iframe width="100%" height="500px" src="https://www.youtube.com/embed/vG7wYkkRUDs" title="FLYING OVER INDONESIA (4K Video UHD) - Peaceful Music With Beautiful Nature Video For Stress Relief" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

}


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

{/* <iframe width="100%" height="500px" src="https://www.youtube.com/embed/vG7wYkkRUDs" title="FLYING OVER INDONESIA (4K Video UHD) - Peaceful Music With Beautiful Nature Video For Stress Relief" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */ }