var key = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
    pos = 0;
$(document).keyup(function(e) {
    if (e.keyCode !== key[pos]) {
        pos = 0;
    } else {
        ++pos;
        if (pos >= key.length) {
            pos = 0;
            window.location.href = "http://communibator.com";
        }
    }
});