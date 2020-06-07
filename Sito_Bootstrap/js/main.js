$(document).ready(function () {
    let cont = 0;

    let _darkmodeToggle = document.getElementsByClassName('darkmode-toggle')[0];

    _darkmodeToggle.addEventListener('click', function name(params) {
        cont++;
    });

    // sticky navigation menu

    let nav_offset_top = $('.overlayNav').height() + 600;

    function navbarFixed() {
        if ($('.overlayNav').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    if (cont % 2 == 0) {
                        $('.openNav').addClass('togg-icon-dark');
                    }
                    else {
                        $('.openNav').addClass('togg-icon');
                    }
                } else {
                    if (cont % 2 == 0) {
                        $('.openNav').removeClass('togg-icon-dark');
                        $('.openNav').addClass('togg-icon');
                    }
                    else {
                        $('.openNav').removeClass('togg-icon');
                        $('.openNav').addClass('togg-icon-dark');
                    }
                }
            })
        }
    }

    navbarFixed();



})
