let colot="";
function color(){
    const has="#";
    const hexcode="0123456789ABCDEF";
    colot=has;
    for(let i=0;i<6;i++)
        { colot=colot+hexcode[Math.floor(Math.random()*16)+1];}
}
let interval=null;
const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const b3=document.getElementById("b3");
const b4=document.getElementById("b4");
const b5=document.getElementById("b5");
const b6=document.getElementById("b6");
 b1.addEventListener("click",function(){
    clearInterval(interval);
    interval=setInterval(function() {
        color();
        document.querySelector("body").style.backgroundColor=colot;
    }, 1000);
})
b4.addEventListener("click",function(){
    clearInterval(interval);
    interval=setInterval(function() {
        color();
        document.querySelector("body").style.backgroundColor=colot;
    }, 10000);
})
b5.addEventListener("click",function(){
    clearInterval(interval);
    interval=setInterval(function() {
        color();
        document.querySelector("body").style.backgroundColor=colot;
    }, 100);
})
b6.addEventListener("click",function(){
    clearInterval(interval);
    interval=setInterval(function() {
        color();
        document.querySelector("body").style.backgroundColor=colot;
    }, 10);
})
 b2.addEventListener("click",function(){
    clearInterval(interval);
 })