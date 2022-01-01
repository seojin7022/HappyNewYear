const body = document.body;
const clock = body.querySelector("#clock");
const title = body.querySelector("#title");


function getTime() {
    if (new Date().getMonth() === 0 && new Date().getDate() === 1) {
        title.innerHTML = "오늘은 1월 1일!!";
        clock.innerHTML = "새해 복 많이 받으세요";
    } else {
        const date = new Date();
        let year = date.getFullYear();

        if (date.getMonth() >= 0 && date.getDate() >= 1) {
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
    
}



getTime();
setInterval(getTime, 1000);


