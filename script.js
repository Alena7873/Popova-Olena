const image = document.getElementById("myImage");
const text = document.getElementById("myText");

image.addEventListener("click", () => {
    text.textContent = "Україна на даний час адреса  не доступна";
});

window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button");
    var doneTimeout = null,
        resetTimeout = null;

    if (btn) {
        btn.addEventListener("click", function () {
            const runClass = "btn--running";
            const doneClass = "btn--done";
            // `.btn--running .btn__progress-fill` `stroke-dashoffset` duration in ms
            const submitDuration = 2000;
            const resetDuration = 1500;

            // fake the submission
            this.disabled = true;
            this.classList.add(runClass);

            clearTimeout(doneTimeout);
            clearTimeout(resetTimeout);

            doneTimeout = setTimeout(() => {
                this.classList.remove(runClass);
                this.classList.add(doneClass);

                // reset the button
                resetTimeout = setTimeout(() => {
                    this.disabled = false;
                    this.classList.remove(doneClass);
                }, resetDuration);

            }, 600 + submitDuration);
        });
    }
});


//текст
// window.onload = function () {
//     document.getElementById('zagolovokVanBasics').innerHTML = 'Основні принципи та техніки медичного масажу';
//     document.getElementById('zagolovokTBasics').innerHTML = 'Якщо Ви хочете скористатись послугами медичного масажу, ось деякі основні рекомендації, які  можуть допомогти Вам підготуватись до процедури:';
// }



// function resizeCanvas() {
//     canvas.width = window.innerWidth
//     canvas.height = window.innerHeight
// }

// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });


// слайди текст
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 12000);


setInterval(nextSlide, 8000);
//блок ціна

// tabl
document.card_blok3.addEventListener("pointermove", (e) => {
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX', x - l - w / 2);
    el.style.setProperty('--posY', y - t - h / 2);
})





