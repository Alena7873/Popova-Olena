const image = document.getElementById("myImage");
const text = document.getElementById("myText");

image.addEventListener("click", () => {
    text.textContent = "Київ Урловская 21a";
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


// tabl
// Отримання елементів табів та їх контенту
const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

function resizeTabContent() {
    tabContents.forEach((tabContent) => {
        tabContent.style.height = 'auto';
        const height = tabContent.offsetHeight;
        tabContent.style.height = height + 'px';
    });
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        tabs.forEach((tab) => tab.classList.remove('active'));
        tabContents.forEach((tabContent) => tabContent.classList.remove('active'));

        const tabId = tab.dataset.tab;
        const activeTabContent = document.querySelector(`#${tabId}`);
        tab.classList.add('active');
        activeTabContent.classList.add('active');

        resizeTabContent();
    });
});

//like
// // Получаем количество лайков из локального хранилища браузера
// var likeCount = parseInt(localStorage.getItem('likeCount')) || 0;

// // Обновляем текст на кнопке при загрузке страницы
// document.getElementById("likeButton").innerHTML = '<i class="fa fa-thumbs-up"></i> ' + likeCount;

// // Добавляем обработчик события на кнопку
// document.getElementById("likeButton").addEventListener("click", function () {
//     // Увеличиваем количество лайков на 1
//     likeCount++;

//     // Сохраняем количество лайков в локальное хранилище браузера
//     localStorage.setItem('likeCount', likeCount);

//     // Обновляем текст на кнопке
//     document.getElementById("likeButton").innerHTML = '<i class="fa fa-thumbs-up"></i> ' + likeCount;
// });


//лайк 
window.onload = function () {
    let likeCount = parseInt(localStorage.getItem('likeCount')) || 0;

    document.getElementById("likeButton").innerHTML = '<i class="fa fa-thumbs-up"></i> ' + likeCount;

    if (localStorage.getItem('likeGiven') === 'true') {
        document.getElementById("likeButton").disabled = true;
    }

    document.getElementById("likeButton").addEventListener("click", function () {
        if (localStorage.getItem('likeGiven') === 'true') {
            return; // если лайк уже был поставлен, прерываем выполнение функции
        }

        likeCount++;
        localStorage.setItem('likeCount', likeCount);
        localStorage.setItem('likeGiven', 'true');

        document.getElementById("likeButton").innerHTML = '<i class="fa fa-thumbs-up"></i> ' + likeCount;
        document.getElementById("likeButton").disabled = true;
    });
}

// like kn
$('.hero-btn').click(function () {
    if (!$('.hero-btn').parent().hasClass('active')) {
        $(this).parent().stop().addClass('active');
        setTimeout(function () {
            $('.hero-btn').parent().removeClass('active');
        }, 2000);
    }
});


//статті 
jQuery(function ($) {

    var $sections = $('.bioYear'),
        $animContainer = $('html, body'),
        $document = $(document),
        numSections = $sections.length,
        currSection = 0,
        isAnimating = false;

    // Animate to a specific index.
    var gotoSection = function (index) {
        isAnimating = true;
        $animContainer.animate({
            scrollTop: $sections.eq(index).offset().top
        }, 750, function () {
            isAnimating = false;
        });
    };

    // Advance to next or previous section.
    var handleAction = function (direction) {
        if (isAnimating) {
            return false;
        }

        if (direction === 'prev' && currSection > 0) {
            currSection--;
        } else if (direction === 'next' && currSection < numSections - 1) {
            currSection++;
        } else {
            return false;
        } // This shouldn't happen.

        gotoSection(currSection);
    };

    // Handle clicks.
    $document.on('click', '.direction', function () {
        handleAction($(this).data('direction'));
    });

    // Handle keyboard input.
    $document.keyup(function (e) {
        if (e.keyCode === 48) {
            handleAction('prev');
        } // Up arrow.
        if (e.keyCode === 50) {
            handleAction('next');
        } // Down arrow.
    });
    //viewport
    var viewport = $(window),
        setVisible = function (e) {
            var viewportTop = viewport.scrollTop(),
                viewportBottom = viewport.scrollTop() + viewport.height();
            $('div.bioYear').each(function () {
                var self = $(this),
                    top = self.offset().top,
                    bottom = top + self.height(),
                    topOnScreen = top >= viewportTop && top <= viewportBottom,
                    bottomOnScreen = bottom >= viewportTop && bottom <= viewportBottom,
                    elemVisible = topOnScreen || bottomOnScreen;
                self.toggleClass('activeSection', elemVisible);
                console.log(JSON.stringify({
                    "div.bioRight": self[0].classList[0],
                    "viewportTop": viewportTop,
                    "top": top,
                    "topOnScreen": topOnScreen,
                    "viewportBottom": viewportBottom,
                    "bottom": bottom,
                    "bottomOnScreen": bottomOnScreen,
                    "elemVisible": elemVisible
                }));
            });
        };
    viewport.scroll(setVisible);
    setVisible();
    $('.zImage').fancybox({
        //	fitToView: false,
        padding: 0,
        //	autoScale : false,
        openEffect: 'elastic',
        closeEffect: 'elastic',
        titlePosition: 'over'
    });
});


