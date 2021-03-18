$('.color').ColorPicker({
    color: '#ffffff',
    onShow: function (colpkr) {
        $(colpkr).fadeIn(500);
        return false;
    },
    onHide: function (colpkr) {
        $(colpkr).fadeOut(500);
        return false;
    },
    onChange: function (hsb, hex, rgb) {
        $('.color').css('backgroundColor', '#' + hex);
        $('#image').css('backgroundColor', '#' + hex);
    }
});
