var seconds = 00 ;
var  tens = 00;
var aTens = document.getElementById("tens");
var aSeconds = document.getElementById("seconds");
var bStart = document.getElementById("bstart");
var bStop = document.getElementById("bstop");
var bReset = document.getElementById("breset");
var interval;


function startTimer(){
    tens++;
    if(tens < 9){
        aTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        aTens.innerHTML = tens;
    }

    if(tens > 99 ){
        seconds++
        aSeconds.innerHTML = "0" + seconds;
        tens = 0;
        aTens.innerHTML = "0" + 0;
       
    }

    if( seconds > 9){
        aSeconds.innerHTML = seconds;
    }
}


bStart.onclick = function (){
    interval = setInterval(startTimer);
}

bStop.onclick = function(){
    clearInterval(interval);
}

bReset.onclick = function (){
    clearInterval(interval);
    tens = "00"
    seconds = "00"
    aSeconds.innerHTML = seconds;
    aTens.innerHTML = tens;
}













































































//var seconds= 00; 

/*var tens = ""

var appendTens= document.getElementById('tens');

var appendSeconds= document.getElementById("seconds");

var buttonStart = document.getElementById("button-start"); 

var buttonStop= document.getElementById("button-stop");

var buttonReset= document.getElementById("button-reset");

var interval; //store timer values


//function clicks on start button


function startTimer(){

tens++;


if(tens < 9){

appendTens.innerHTML = '0' + tens;

}


if(tens > 9){

appendTens.innerHTML = tens;


}



if(tens > 99){

seconds++;

appendSeconds.innerHTML = '0' + seconds;

tens = 0;

appendTens.innerHTML = '0' + 0;

}


if(seconds > 9){

appendSeconds.innerHTML = seconds;

}


}



buttonStart.onclick = function(){

interval = setInterval(startTimer);

};


buttonStop.onclick = function(){

clearInterval(interval);

};


buttonResett.onclick = function(){

clearInterval(interval);

tens = '00';

seconds = '0';

appendSeconds.innerHTML = seconds;

appendTens.innerHTML = tens;

};

*/