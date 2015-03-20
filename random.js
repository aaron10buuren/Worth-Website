var orig = $(".gallery").children();

reorder();

function reorder() {
    var grp = $(".gallery").children();
    var cnt = grp.length;

    var temp, x;
    for (var i = 0; i < cnt; i++) {
        temp = grp[i];
        x = Math.floor(Math.random() * cnt);
        grp[i] = grp[x];
        grp[x] = temp;
    }
    $(grp).remove();
    $(".gallery").append($(grp));
}


window.onload = reorder;