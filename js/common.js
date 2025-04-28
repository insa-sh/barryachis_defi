// Document ready
$(document).ready(function() {
    // Au défilement, le header prend une box-shadow
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('header-scroll');
        } else {
            $('header').removeClass('header-scroll');
        }
    });

    $('header .burger-menu').click(function() {
        $('header .burger-menu').toggleClass('active');
        $('header nav').toggleClass('active');
    });

    // //rafraichir la page si l'utilisateur change de dimension d'écran
    // $(window).resize(function() {
    //     location.reload();
    // });
});