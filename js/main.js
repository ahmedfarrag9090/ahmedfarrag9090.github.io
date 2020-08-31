$(function(){

    var mywindow = $(window),
        leftGate = $('.g-left'),
        rightGate = $('.g-right');

    
    // To hide loading when website is ready
    mywindow.on('load', function(){
        $('body').css('overflow-y', 'auto');
        $('.loading').fadeOut(600);
    });

    // To prevent horizontal scroll
    mywindow.on('resize', function(){
        $('body, html').width($(this).innerWidth());
    });
    
    
    // Show & Hide side-bar
    $('.menu-btn').on('click', function(){
        $('aside, .content').toggleClass('show');
    });

    // active side-bar item when user is seeing the relevant section
    $('.content > div').each(function(){

        if(mywindow.scrollTop() >= ($(this).offset().top - 15)){

            var currItem = '#' + $(this).attr('id');

            $('.side-menu li a[data-target="' + currItem + '"]').parent('li')
            .addClass('active').siblings('li').removeClass('active');
            
        }
    });

    // Open & Close the gate at top of portfolio section according to scroll-top value
    $(function(){
        if((mywindow.scrollTop() / 4) <= 90){
            leftGate.css('transform', 'rotateZ(' + ($(this).scrollTop() / 4) + 'deg)');
            rightGate.css('transform', 'rotateZ(-' + ($(this).scrollTop() / 4) + 'deg)');
        }else if((mywindow.scrollTop() / 4) > 90){
            leftGate.css('transform', 'rotateZ(90deg)');
            rightGate.css('transform', 'rotateZ(-90deg)');
        }
    });
    

    mywindow.on('scroll', function(){
        
        // active side-bar item when user is seeing the relevant section while scrolling
        $('.content > div').each(function(){

            if(mywindow.scrollTop() >= ($(this).offset().top - 30)){

                var currItem = '#' + $(this).attr('id');

                $('.side-menu li a[data-target="' + currItem + '"]').parent('li')
                .addClass('active').siblings('li').removeClass('active');

            }
        });

        // Open & Close the gate at top of portfolio section according to scroll-top value while scrolling
        if(($(this).scrollTop() / 4) <= 90){
            
            leftGate.css('transform', 'rotateZ(' + ($(this).scrollTop() / 4) + 'deg)');
            rightGate.css('transform', 'rotateZ(-' + ($(this).scrollTop() / 4) + 'deg)');
            
            $('.gate span:first').css('transform', 'rotateZ(-' + ($(this).scrollTop()) + 'deg)');
            $('.gate span:last').css('transform', 'rotateZ(' + ($(this).scrollTop()) + 'deg)');
            
        }else if(($(this).scrollTop() / 4) > 90){
            leftGate.css('transform', 'rotateZ(90deg)');
            rightGate.css('transform', 'rotateZ(-90deg)');
        }
    });


    $('.side-menu li a').on('click', function(){

        // scroll to the relevant section when link is clicked and active it
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        $('html, body').animate({
            scrollTop : ($($(this).data('target')).offset().top) - '10'
        },1000);

        // Hide side-bar
        $('aside, .content').removeClass('show');
    });




    // Show & Hide image of the project in portfolio by rotate overlay
    $('.gallery > div').hover(function(){
        $(this).find('.front').toggleClass('show-back')
        .end().find('.back img').toggleClass('translate-img');
    });


});