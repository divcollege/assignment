jQuery(function () {
    let width = 50;
    //zoom in
    $('.imageClass').css('width', width + '%');
    $('.zIn').on('click', function () {
        width += 5;
        $('.imageClass').css('width', width + '%');
    });
    //zoom out
    $('.imageClass').css('width', width + '%');
    $('.zOut').on('click', function () {
        width -= 5;
        $('.imageClass').css('width', width + '%');
    });
});