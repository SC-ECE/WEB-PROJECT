let music=new Audio("Alarm.wav");
setInterval(() => {
    // generating hours,minutes,seconds
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();

    // for displayTime
    h.innerHTML=hour;
    m.innerHTML=minute;
    s.innerHTML=second;

    // rotaion calculation
    hrotate = 30 * hour + minute / 2;
    mrotate = 6 * minute;
    srotate = 6 * second;
    
    // rotate hands
    hours.style.transform = `rotate(${hrotate}deg)`
    minutes.style.transform = `rotate(${mrotate}deg)`
    seconds.style.transform = `rotate(${srotate}deg)`
}, 1000)
function addZero(time) {

    return (time < 10) ? "0" + time : time;

}
