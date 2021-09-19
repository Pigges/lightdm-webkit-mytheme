let time;

function clock() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    m=checkTime(m);
    return h+":"+m;
}
function checkTime(i) {
    if (i<10) {
        i="0" + i;
    }
    return i
}

export {clock}
