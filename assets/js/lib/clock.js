let time;

function startTime() {
    time = clock();
}

function checkClock() {
    return time;
}

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

export {startTime, checkClock}
