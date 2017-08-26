window.onload=function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop();
        console.log(scrollTop)
        $('header').css({
            "transform":"translate(0%," + scrollTop + '%'
        });
        $('img').css({
            "transform":"translate(0%," + scrollTop/20 + '%'
        });
    })
    console.log(document.images);

}