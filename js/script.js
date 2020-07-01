$(document).ready(function () {
    console.log("Ready!!");
    
    // $("h2").html("Título Jquery");
    // $("h2").addClass("background_gray");
    
    // $('h2').click(function () { 
    //     $('h2').html("Click!"); 
    // });

    // $('#email_r').keyup(function () { 
    //     $('#jq').html($('#email_r').val());
    // });

    // $('h2').click(function () { 
    //     $('a').toggle(1000);
    // });

    // $('h2').click(function () { 
    //     $('a').toggleClass("background_gray");
    // });

    // $('h2').click(function () { 
    //     $('a').animate({left: '200px'});
    // });

    // $('h2').click(function () { 
    //     $('a').animate({left: '200px'});
    // });

    // open menu mobile
    $('.icon_menu').click(function () { 
        $('.menu_mobile').show(300);
        $('#desenfocar').addClass("blured");
        $("html").addClass("no-scroll");
    });
    // close menu mobile
    $('.close').click(function () { 
        $('.menu_mobile').hide(300);
        $('#desenfocar').removeClass("blured");
        $("html").removeClass("no-scroll");
    });

    // first slider
    $('#sl1-back').click(function () {
        $('.slide').hide();
        $('.slide3').fadeIn(1000);
    });
    $('#sl1-next').click(function () {
        $('.slide').hide();
        $('.slide2').fadeIn(1000);
    });
    // second slider
    $('#sl2-back').click(function () {
        $('.slide2').hide();
        $('.slide').fadeIn(1000);
    });
    $('#sl2-next').click(function () {
        $('.slide2').hide();
        $('.slide3').fadeIn(1000);
    });
    // third slider
    $('#sl3-back').click(function () {
        $('.slide3').hide();
        $('.slide2').fadeIn(1000);
    });
    $('#sl3-next').click(function () {
        $('.slide3').hide();
        $('.slide').fadeIn(1000);
    });

    // Q&A
    $('#Question-1').click(function () {
        $(this).toggleClass('background_purple');
        $('#Answer-1').slideToggle(500);
        return false
    });
    $('#Question-2').click(function () {
        $(this).toggleClass('background_purple');
        $('#Answer-2').slideToggle(500);
        return false
    });
    $('#Question-3').click(function () {
        $(this).toggleClass('background_purple');
        $('#Answer-3').slideToggle(500);
        return false
    });
    $('#Question-4').click(function () { 
        $(this).toggleClass('background_purple');
        $('#Answer-4').slideToggle(500);
        return false
    });
    $('#Question-5').click(function () { 
        $(this).toggleClass('background_purple');
        $('#Answer-5').slideToggle(500);
        return false
    });
    // Scroll
    $('#hd').waypoint(function(direction){
        if (direction == 'down'){
            $('#hd').addClass('active');
        }else{
            $('#hd').removeClass('active');
        }
    }, {offset: '60%'});
}); 

