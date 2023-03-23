import $ from 'jquery';
import 'bootstrap';
import './utils/sliders';
import './utils/callback';
import Inputmask from "inputmask";
import { Modal } from 'bootstrap';

// эта настройка нужна для корректной работы $ вне этого приложения
window.$ = $;
window.jQuery = $;
window.Modal = Modal;

require('@fancyapps/fancybox');

$(function () {
    const mask = new Inputmask('+7 (999) 999-99-99');
    mask.mask(document.querySelectorAll('.maskedinput-phone'));

    // fancybox
    $('[data-fancybox="gallery"]').fancybox();

    let url = window.location.pathname;
    url = url.split('/');
    url = '/' + url[1];
    $('.nav-item a[href="' + url + '"]').addClass('active');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').removeClass('d-none');
        } else {
            $('.scrollup').addClass('d-none');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    let navbarToggler = document.querySelector('.navbar-toggler')
    let headerNavbar = document.querySelector('.header__navbar')

    navbarToggler.addEventListener('click', function () {
        if (navbarToggler.getAttribute('aria-expanded') === 'true') {
            headerNavbar.classList.add('header__navbar_open')
        } else {
            headerNavbar.classList.remove('header__navbar_open')
        }
    })

    if (window.innerWidth > 991) {
        $('.header__navbar-nav .dropdown').mouseover(function() {
            $(this).find('a[data-bs-toggle="dropdown"]').addClass('hover');
            $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(125);
        }).mouseout(function() {
            $(this).find('a[data-bs-toggle="dropdown"]').removeClass('hover');
            $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(50);
        })
    }


    $(document).on('click', 'a[data-scroll^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: ($($.attr(this, 'data-scroll')).offset().top - 100)
        }, 700);
    });

    if (document.querySelector('input[type=file]')) {
        let fileInputs = document.querySelectorAll('input[type=file]');
        fileInputs.forEach(function(input) {
            input.addEventListener('change', function() {

                let profilePicValue = input.value;
                let fileNameStart = profilePicValue.lastIndexOf('\\');
                profilePicValue = profilePicValue.substr(fileNameStart + 1);
                let profilePicLabelText = input.nextElementSibling;

                if (profilePicValue !== '') {
                    profilePicLabelText.innerHTML = 'Выбрать другой';
                    profilePicLabelText.classList.add('active');
                } else {
                    profilePicLabelText.innerHTML = 'Прикрепить файл';
                    profilePicLabelText.classList.remove('active');
                }
            });
        });
    }

    if (document.querySelector(".to-top")) {
        let toTop = document.querySelector(".to-top");

        window.onscroll = function() {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                toTop.classList.add('show');
            } else {
                toTop.classList.remove('show');
            }
        }

        function topFunction() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        toTop.addEventListener('click', function() {
            topFunction()
        })
    }
});

window.onscroll = function() {
    var fixedTop = document.getElementById('navbar-active');

    if (window.pageYOffset > 96) {
        fixedTop.classList.add('block');
    } else {
        fixedTop.classList.remove('block');
    }
};


// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
// вписываем нужный нам текст внутрь элемента
mapTitle.textContent = 'Для активации карты нажмите по ней';
// добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
wrapMap.appendChild(mapTitle);
// по клику на карту
wrapMap.onclick = function() {
    // убираем атрибут "style", в котором прописано свойство "pointer-events"
    this.children[0].removeAttribute('style');
    // удаляем элемент с интерактивной подсказкой
    mapTitle.parentElement.removeChild(mapTitle);
}
// по движению мыши в области карты
wrapMap.onmousemove = function(event) {
    // показываем подсказку
    mapTitle.style.display = 'block';
    // двигаем подсказку по области карты вместе с мышкой пользователя
    if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
    if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
// при уходе указателя мыши с области карты
wrapMap.onmouseleave = function() {
    // прячем подсказку
    mapTitle.style.display = 'none';
}
