$(document).ready(function() {
    const navbar = $(".navbar");
    let prevScrollPos = $(window).scrollTop();

    $(window).scroll(function() {
        const currentScrollPos = $(window).scrollTop();

        if (currentScrollPos > prevScrollPos) {           
            navbar.addClass("hidden");
        } else {
            navbar.removeClass("hidden");
            navbar.addClass("solid");
        }
        if (currentScrollPos === 0) {
            navbar.removeClass("solid");
        } else {
            navbar.addClass("solid");
        }
        prevScrollPos = currentScrollPos;
    });
});