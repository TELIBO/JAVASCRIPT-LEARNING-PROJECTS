let r1;
let r2;
let r3;
document.getElementById("button").onclick=function(){
    r1=Math.floor(Math.random()*6)+1;
    r2=Math.floor(Math.random()*6)+1;
    r3=Math.floor(Math.random()*6)+1;
    if(r1===r2&&r2===r3){
        document.getElementById("h1").textContent="BOOOOOOOOOGAYAAAAAAAA";
        document.getElementById("l1").textContent=r1;
        document.getElementById("l2").textContent=r2;
        document.getElementById("l3").textContent=r3;
    }
    else{
    document.getElementById("h1").textContent="Try Your Luck";
    document.getElementById("l1").textContent=r1;
    document.getElementById("l2").textContent=r2;
    document.getElementById("l3").textContent=r3;
    }

}