const image = document.getElementById("myImage");
const text = document.getElementById("myText");

image.addEventListener("click", () => {
    text.textContent = "Україна місто вулиця буд ";
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
//текст
window.onload = function () {
    document.getElementById('zagolovokVanBasics').innerHTML = 'Основні принципи та техніки медичного масажу';
    document.getElementById('zagolovokTBasics').innerHTML = 'Якщо Ви хочете скористатись послугами медичного масажу, ось деякі основні рекомендації, які  можуть допомогти Вам підготуватись до процедури:';
}
// ціна
console.clear()
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

resizeCanvas()

let pipes = []

class Pipe {
    constructor(x, y, size, xVel, yVel, clr) {
        this.x = x
        this.y = y
        this.size = size
        this.color = clr
        this.xVel = xVel
        this.xPrev = xVel
        this.yVel = yVel
        this.yPrev = yVel
        this.minDist = this.updateMinDist()
        this.dist = 0
        this.hasEnteredScreen = false
    }
    update() {
        this.x += this.xVel
        this.y += this.yVel
        this.dist++

        if (!this.hasEnteredScreen) {
            if (this.x > 0 && this.x < canvas.width && this.y > 0 && this.y < canvas.height) {
                this.hasEnteredScreen = true
            }
        }

        if (this.dist % this.minDist === 0) {
            if (Math.random() > 0.75) {
                this.changeDirections()
                this.minDist = this.updateMinDist()
            }
        }
    }
    draw() {
        const scale = 8
        const gradient = ctx.createRadialGradient(this.x, this.y, 2, this.x, this.y, this.size * scale);

        // Add three color stops
        gradient.addColorStop(0, "rgba(60, 0, 83, 0.04)");
        gradient.addColorStop(1, "rgba(60, 0, 83, 0)");

        // Set the fill style and draw a rectangle
        ctx.fillStyle = gradient;
        ctx.fillRect(this.x - this.size * (scale / 2), this.y - this.size * (scale / 2), this.size * scale, this.size * scale);

        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
    updateMinDist() {
        return Math.floor(Math.random() * 100 + 50)
    }
    changeDirections() {
        const prevX = this.xVel
        const prevY = this.yVel
        this.xVel = Math.random() > 0.5 ? this.yPrev : this.yPrev * -1
        this.yVel = Math.random() > 0.5 ? this.xPrev : this.xPrev * -1
        this.xPrev = this.xVel
        this.yPrev = this.yVel
    }
}

function init(quantity, clr, scale = 1) {
    for (let i = 0; i < quantity; i++) {
        const speed = Math.random() * 0.4 + 0.25
        let x, y, xVel, yVel
        // const size = Math.random() * 3 + 1
        const size = (Math.random() + 0.5 - 0.5) * scale
        if (Math.random() >= 0.5) {
            x = Math.random() > 0.5 ? size * -1 : canvas.width + size
            y = Math.random() * canvas.height
            xVel = x < 0 ? speed : speed * -1
            yVel = 0
        } else {
            x = Math.random() * canvas.width
            y = Math.random() > 0.5 ? size * -1 : canvas.height + size
            xVel = 0
            yVel = y < 0 ? speed : speed * -1
        }
        pipes.push(new Pipe(x, y, size, xVel, yVel, clr))
    }
}
init(16, '#4FBFA5')
// init(16, '#fff')
setTimeout(() => {
    init(16, '#40d8b5', 1.5)
    // init(10, '#fff', 1.1)
}, 1500)
setTimeout(() => {
    init(8, '#00868A', 2)
    // init(6, '#fff', 1.25)
}, 3000)

function animate() {

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].update()
        pipes[i].draw()

        if (pipes[i].hasEnteredScreen) {
            if (pipes[i].x < 0 || pipes[i].x > canvas.width || pipes[i].y < 0 || pipes[i].y > canvas.height) {
                pipes.splice(i, 1)
                i--
            }
        }
    }

    console.log(pipes.length)

    requestAnimationFrame(animate)
}
animate()

window.addEventListener('resize', resizeCanvas)

function resizeCanvas() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// блок4

const rightText = document.querySelector('.right-text4');
const leftText = document.querySelector('.left-text4');

rightText.addEventListener('click', function () {
    rightText.classList.toggle('clicked');
    leftText.classList.toggle('hidden4');
    setTimeout(() => {
        leftText.classList.toggle('hidden4');
        leftText.classList.toggle('show');
    }, 10);
    setTimeout(() => {
        leftText.classList.toggle('show');
    }, 310);
});

