"use strict";

$(".forward").click(function() {
    return $(".carousel").carousel("next");
});
$(".backward").click(function() {
    return $(".carousel").carousel("prev");
});

$('.carousel-sync').carousel('cycle');
$('.carousel-sync').on('click', '.carousel-control[data-slide]', function(ev) {
    ev.preventDefault();
    $('.carousel-sync').carousel($(this).data('slide'));
});

$(function() {

    $(".carousel-sync").swipe({
        swipeRight: function swipeRight() {
            $('.carousel-sync').carousel('prev');
        },

        swipeLeft: function swipeLeft() {
            $('.carousel-sync').carousel('next');
        },
        threshold: 5,
        preventDefaultEvents: false
    });
});