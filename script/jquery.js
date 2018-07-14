//scrolling effect by adding and removing css classes
$(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
        $(".nav").addClass('bounceInDown animated-fast');
        $(".nav").addClass('active-nav');
    }
    else {
        $(".nav").removeClass('bounceInDown animated-fast');
        $(".nav").removeClass('active-nav');
    }
});

// When the user clicks on the button, scroll to the top of the document
$("#topFunction").click(function(){
    window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })
});

function closeFunction(x)
{
    $(".small-links-opener").removeClass("change");
    $(".nav").css("height","70px");
}


//toggle open and close menu sign on mobile nav
function myFunction(x) {
    x.classList.toggle("change");
    if($(".nav").css("height")=="70px")
    {
        $(".small-links").slideDown();
        $(".nav").css("height","auto");
    }
    else
    {
        $(".small-links").fadeOut();
            $(".nav").css("height","70px");
    }
}

if($(document).width()<1090)
{
    $(".first").css("background-image","url('./images/background_try.svg')");
    $(".first").css("background-size","100% 100%");
    $(".first").css("background-repeat","no-repeat");
}
else
{
    $(".first").css("background-image","url('./images/background_try.svg')");
    $(".first").css("background-size","cover");
    $(".first").css("background-repeat","no-repeat");
}

$('.count-bar').on('inview',function(){
    $(document).ready(function(){
        $('.skillbar').each(function(){
            $(this).find('.count-bar').animate({
                width:$(this).attr('data-percent')
            },3000);
        });
    if($(document).width()>600)
    {
        $("#skillgraph_1").fadeIn(1500);
    }
    });
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 500);
});

            if($(document).width()>600)
            {
                $("#skillgraph_1").hide();
            }
