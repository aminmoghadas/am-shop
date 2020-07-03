var desh=0;
var ulh=0;
$(document).ready(function(){
    $(".archive .product").attr('data-click-state', 0);
    $(".archive .product").on('click',function () {

        if($(this).attr('data-click-state') == 0) {
            $(this).attr('data-click-state', 1);
            //$(".prd-image").children(".prd-arrow").addClass("prd-arrow2").removeClass("prd-arrow");
            //$(".wp-post-image--secondary").css("opacity", 0);
            //ulh = $("ul.products").height();
            var h = $(this).children(".prd-image").height();
            $(this).children(".prd-desc").addClass("prd-active");
            var desh = $(this).children(".prd-desc").height();
            $(this).children(".prd-image").children(".prd-arrow2").addClass("prd-arrow").removeClass("prd-arrow2");
            $(this).children(".prd-image").children(".wp-post-image--secondary").css("opacity", 1);
            var hall = h + desh + 28;
            $(this).height(hall);
        }else{
            $(this).children(".prd-desc").removeClass("prd-active");
            $(this).children(".prd-image").children(".prd-arrow").addClass("prd-arrow2").removeClass("prd-arrow");
            $(this).children(".prd-image").children(".wp-post-image--secondary").css("opacity", 0);
            var h = $(this).children(".prd-image").height();
            $(this).height(h);
            console.log("tttt");
            $(this).attr('data-click-state', 0);

        }

    });
    $(".term-16 .product_cat-16").click(function () {
        $(".prd-image").children(".prd-arrow").addClass("prd-arrow1").removeClass("prd-arrow");
        $(".wp-post-image--secondary").css("opacity", 0);
        var h = $(this).children(".prd-image").height();
        $("li.product_cat-16").height(h);
        $(".coffee-desc").removeClass("coffee-active");
        $(this).children(".coffee-desc").addClass("coffee-active");
        var desh= $(this).children(".coffee-desc").height();
        $(this).children(".prd-image").children(".prd-arrow1").addClass("prd-arrow").removeClass("prd-arrow1");
        $(this).children(".prd-image").children(".wp-post-image--secondary").css("opacity", 1);
        $(this).height(h+desh+100);
        desh=0;
    });
    $(".term-31 .product_cat-31").click(function () {
        $(".prd-image").children(".prd-arrow").addClass("prd-arrow2").removeClass("prd-arrow");
        $(".wp-post-image--secondary").css("opacity", 0);
        var h = $(this).children(".prd-image").height();
        $("li.product_cat-31").height(h);
        $(".dam-desc").removeClass("dam-active");
        $(this).children(".dam-desc").addClass("dam-active");
        var desh= $(this).children(".dam-desc").height();
        $(this).children(".prd-image").children(".prd-arrow2").addClass("prd-arrow").removeClass("prd-arrow2");
        $(this).children(".prd-image").children(".wp-post-image--secondary").css("opacity", 1);
        $(this).height(h+desh+100);
        desh=0;
    });
    $('.mobile-menu').click(function () {
        $('.mobile-menu-bg').show('slow');
    });
    $('.mobile-close').click(function () {
        $('.mobile-menu-bg').hide('slow');
    });
    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            800:{
                items:4
            }
        }
    });
    $(".page-numbers .prev").text("→");
    $(".page-numbers .next").text("←");
});