var timer = 10;
var score = 0;
var hitrn;

function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}
function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
     
}

function makebubble(){
    var clutter ="";

for(var i =1 ; i<=56;i++){
    var rn = Math.floor(Math.random()*10) 
   clutter = clutter + `<div class="bubble">${rn}</div>`;            

}

document.querySelector("#pbot").innerHTML = clutter;

}

function runtimer(){
    var timerint = setInterval(function(){
        if(timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timerint);

            document.querySelector("#pbot").innerHTML=`<h1 id="dug">Game over`;
        }
    },1000);

}

document.querySelector("#pbot").addEventListener("click",function(chacha){
   var clickednum = Number(chacha.target.textContent);
   if(clickednum == hitrn){
    increasescore();
    makebubble();
    getnewhit();
   }
   else{

    clearInterval(timerint);

    document.querySelector("#pbot").innerHTML=`<h1 id="dug">Game over`;
   }
});
runtimer();
makebubble();
getnewhit();