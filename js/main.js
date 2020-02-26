$(function(){
    

    $(window).on('load', function(){
        $('body').css('overflow-y', 'auto');
        $('.overload').fadeOut(600);
    });


    
    $('body, html').width($(window).innerWidth());

    $(window).on('resize', function(){
        $('body, html').width($(this).innerWidth());
    });
    
    

    $('.menu-btn').on('click', function(){
        $('aside, .content').toggleClass('show');
    });


    $('.content > div').each(function(){

        if($(window).scrollTop() >= ($(this).offset().top - 15)){

            var currItem = '#' + $(this).attr('id');

            $('.side-menu li a[data-target="' + currItem + '"]').parent('li')
            .addClass('active').siblings('li').removeClass('active');
            
        }
    });
    

    $(window).on('scroll', function(){
        
        
        $('.content > div').each(function(){

            if($(window).scrollTop() >= ($(this).offset().top - 15)){

                var currItem = '#' + $(this).attr('id');

                $('.side-menu li a[data-target="' + currItem + '"]').parent('li')
                .addClass('active').siblings('li').removeClass('active');

            }
        });
        
        if(($(this).scrollTop() / 4) <= 90){
            
            $('.g-left').css('transform', 'rotateZ(' + ($(this).scrollTop() / 4) + 'deg)');
            $('.g-right').css('transform', 'rotateZ(-' + ($(this).scrollTop() / 4) + 'deg)');
            
            $('.gate span:first').css('transform', 'rotateZ(-' + ($(this).scrollTop()) + 'deg)');
            $('.gate span:last').css('transform', 'rotateZ(' + ($(this).scrollTop()) + 'deg)');
            
        }else if(($(this).scrollTop() / 4) > 90){
            $('.g-left').css('transform', 'rotateZ(90deg)');
            $('.g-right').css('transform', 'rotateZ(-90deg)');
        }
    });
    
    $(function(){
        if(($(this).scrollTop() / 4) <= 90){
            $('.g-left').css('transform', 'rotateZ(' + ($(this).scrollTop() / 4) + 'deg)');
            $('.g-right').css('transform', 'rotateZ(-' + ($(this).scrollTop() / 4) + 'deg)');
        }else if(($(this).scrollTop() / 4) > 90){
            $('.g-left').css('transform', 'rotateZ(90deg)');
            $('.g-right').css('transform', 'rotateZ(-90deg)');
        }
    });



    $('.side-menu li a').on('click', function(){

        $(this).parent('li').addClass('active').siblings().removeClass('active');
        $('html, body').animate({
            scrollTop : ($($(this).data('target')).offset().top) - '10'
        },1000);

        $('aside, .content').removeClass('show');
    });





    $('.gallery > div').hover(function(){
        $(this).find('.front').toggleClass('show-back')
        .end().find('.back img').toggleClass('translate-img');
    });


});