
$(document).ready(function () {

    // change header on scroll -------------------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });
    // mobile menu -------- //
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.header__nav').toggleClass('open');
        $('.header').toggleClass('white');
    });


    // post category tabs -------- //
    $('.categories__tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.categories__window').removeClass('active-window').hide();
        $('.categories__tab').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-window').fadeIn(500);
        if(dataClass == 'all') {
            $('.categories__window').addClass('active-window').fadeIn(500);
        }
        return false;
    });



    // POST NAV SCRIPT --------------------- //
    $(".postnav ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 105 }, 1500);
    });

    const links = document.querySelectorAll('.postnav li a');
    window.addEventListener('scroll', () => {
        const anchors = document.querySelectorAll('article [id]');
        anchors.forEach(anchor => {
            if (anchor.closest('article')) {
                const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                if (window.pageYOffset >= anchorTop - 110) {
                    links.forEach(link => {
                        const correspondingLink = document.querySelector(`.postnav li a[href="#${anchor.id}"]`);
                        if (correspondingLink) {
                            link.classList.remove('active');
                            correspondingLink.classList.add('active');
                        }
                    });
                }
            }
        });
    });


});