let hrs  = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

setInterval(()=>{
    const currentYear = new Date();

    hrs.innerHTML = currentYear.getHours();
    min.innerHTML = currentYear.getMinutes();
    sec.innerHTML = currentYear.getSeconds();
}, 1000)
