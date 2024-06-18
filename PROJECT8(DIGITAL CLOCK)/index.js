
setInterval(function(){
    const date=new Date();
    const clock=document.querySelector("#clock");
    clock.innerHTML=date.toLocaleTimeString();
},1000)