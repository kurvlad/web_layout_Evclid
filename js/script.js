window.addEventListener('DOMContentLoaded', function (){
    // accordion
    $(".accordion").accordion({
        heightStyle: "content",
        active: false,
        collapsible: true
    });
    
    $('#close').on('click', function () {
        $('#accordion').accordion({
            collapsible: true,
            active: false,
        });
    });

    // burger
    document.querySelector('#header__burger').addEventListener('click', function () {
        document.querySelector('#header__menu').classList.toggle('header__menu-active');
        document.querySelector('#header__burger').classList.toggle('header__burger-active');

        // Назначаем элемент изображения
        // const img = document.querySelector('img');

        // img.hasAttribute('src');                // возвращает true
        // img.getAttribute('src');                // возвращает "...shark.png"
        // img.removeAttribute('src');             // удаляет атрибут src и значение
        // img.setAttribute('src', 'image/burger-active.svg');
        // img.setAttribute('src', 'image/burger.svg');
    });

    // headerSearch

    document.querySelector('#header__search-link').addEventListener('click', function(){
        document.querySelector('#header__search').classList.toggle('header__search-active')
    })
    document.querySelector('#header__search-link-close').addEventListener('click', function(){
        document.querySelector('#header__search').classList.toggle('header__search-active')
    })
    




    // info-slider
    document.querySelectorAll('.info__slider-list-btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.info-text').forEach(function (tabContent) {
                tabContent.classList.remove('info-text-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('info-text-active')


            const title = event.currentTarget.dataset.title
            document.querySelectorAll('.info__slider-list-btn').forEach(function (tabContent) {
                tabContent.classList.remove('color-red')
            })
            document.querySelector(`[data-target="${title}"]`).classList.add('color-red')



        })
    })






    // hero
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        clickable: true,



        effect: 'slide',
        grabCursor: true,
        // And if we need scrollbar
        //   scrollbar: {
        //     hide:true,
        //     el: '.swiper-scrollbar',
        //   },
    });
})