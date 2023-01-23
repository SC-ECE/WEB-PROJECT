$(document).ready(function() {

    let menu_icon = document.querySelector('.menu-icon i');
    let menu_list = document.querySelector('.header ul');

    menu_icon.onclick = () => {
        menu_icon.classList.toggle('bx-x');
        menu_list.classList.toggle('open')
    }
    
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1) {
            $('.header-area').addClass("sticky");
        } else {
            $('.header-area').removeClass("sticky");
        }
    });

})