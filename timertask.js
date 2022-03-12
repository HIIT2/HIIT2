let tHour = document.getElementById('info');

let tSecond = 300;

dTime(tSecond);

const cDown = setInterval( () =>{
    tSecond--;
   // tHour.innerHTML = `00:${tSecond}`;
   dTime(tSecond)
    if(tSecond <= 0 || tSecond < 1){
        eTime()
        clearInterval(cDown)
    }

},1000)


function dTime(second){
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    tHour.innerHTML = `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0': ''}${sec}`;
}

function eTime(){
    tHour.innerHTML = "Time Out";
}
;