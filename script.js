function Countdown(){
    var now = new Date();
    var eventDate = new Date(2018, 06, 28);
 //find the different betweeen  the cuurent time of event using millseceond  
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTiime; 
//counting millsecond into house, minutes and second for easy calculation
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
//%= is to give the remain hours, minutes and seconds
    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;  

    setTimeout(Countdown, 1000);
}
Countdown();