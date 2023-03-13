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
