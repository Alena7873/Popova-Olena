const qwslides = document.querySelectorAll('.slide');
let qwcurrentSlide = 0;

function nextSlide() {
    qwslides[qwcurrentSlide].classList.remove('active');
    qwcurrentSlide = (qwcurrentSlide + 1) % qwslides.length;
    qwslides[qwcurrentSlide].classList.add('active');
}

// Массив лайкоа антицелюліт

const likeButton = document.getElementById('likeAnti');
const likeCount = document.getElementById('like-count');

let currentLikes = parseInt(localStorage.getItem('likedCount')) || 0;
likeCount.textContent = currentLikes;

likeButton.addEventListener('click', function () {
    currentLikes++;
    localStorage.setItem('likedCount', currentLikes);
    likeCount.textContent = currentLikes;
});
// Массив лайкоа basic
const likeButtons = document.getElementById('likeAntiq');
const likeCounts = document.getElementById('like-countq');

let currentLikesq = parseInt(localStorage.getItem('likedCountq')) || 0;
likeCounts.textContent = currentLikesq;
likeButtons.addEventListener('click', function () {
    currentLikesq++;
    localStorage.setItem('likedCountq', currentLikesq);
    likeCounts.textContent = currentLikesq;
});

///prise
document.getElementById("price-action").onclick = function () {
    if (document.getElementById("name").value == "") {
        alert("Заповніть поле імені");
    } else if (document.getElementById("phone").value == "") {
        alert("Заповніть поле телефону");
    } else if (document.getElementById("mas").value == "") {
        alert("Заповніть поле масажу");
    } else {
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let mas = document.getElementById("mas").value;

        let formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("mas", mas);

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "process.php");
        xhr.send(formData);

        alert("Дякуємо за звернення! Ми зв'яжемося з вами найближчим часом");
    }
};


document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});

function scrollToPriceForm() {
    var priceForm = document.getElementById("price-form");
    priceForm.scrollIntoView({ behavior: "smooth" });
}

//  надпись на копке

document.getElementById("price-action").addEventListener("click", function (event) {
    if (!document.getElementById("formAgreement").checked) {
        event.preventDefault();
        alert("Будь ласка, погодьтеся на обробку персональних даних перед відправкою форми.");
    }
});


$(document).ready(function () {
    $("#price-form").submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "./process.php",
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});

//  статті




const pc = particlesCursor({
    el: document.getElementById('app'),
    gpgpuSize: 512,
    colors: [0x00ff00, 0x0000ff],
    color: 0xff0000,
    coordScale: 0.5,
    noiseIntensity: 0.001,
    noiseTimeCoef: 0.0001,
    pointSize: 5,
    pointDecay: 0.0025,
    sleepRadiusX: 250,
    sleepRadiusY: 250,
    sleepTimeCoefX: 0.005,
    sleepTimeCoefY: 0.002
})

document.body.addEventListener('click', () => {
    pc.uniforms.uColor.value.set(Math.random() * 0xffffff)
    pc.uniforms.uCoordScale.value = 0.005 + Math.random() * 2
    pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001
    pc.uniforms.uPointSize.value = 1 + Math.random() * 10
})



