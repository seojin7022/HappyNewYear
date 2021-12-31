const body = document.body;
const clock = body.querySelector("#clock");

function getTime() {
    const date = new Date();
    let year = date.getFullYear();

    if (date.getMonth() >= 1 && date.getDay() >= 1) {
        year = year + 1;
    }


    const newYear = new Date(`${year} 1 1`);
    let gap = newYear.getTime() - date.getTime();
    const day = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, "0");
    const hour = String(Math.floor(gap  % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).padStart(2, "0");
    const min = String(Math.floor(gap  % (1000 * 60 * 60) / (1000 * 60))).padStart(2, "0");
    const sec = String(Math.floor(gap % (1000 * 60) / (1000))).padStart(2, "0");
    
    clock.innerHTML = `${day}일 ${hour}시간 ${min}분 ${sec}초`;
}

getTime();
setInterval(getTime, 1000);