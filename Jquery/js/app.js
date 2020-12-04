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

    $('.eyecon').on('click', function () {
        if ($('#password').attr('type') === 'password') {
            $('#password').attr('type', 'text');
            this.className = "eyecon fas fa-eye-slash";
            // $('.eyecon').addClass('fa-eye-slash');

        } else {
            $('#password').attr('type', 'password');
            this.className = "eyecon fas fa-eye";
        }

    })
});