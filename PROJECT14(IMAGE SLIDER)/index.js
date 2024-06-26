let slidenumber=0;

document.querySelector(".next").addEventListener("click",function(){
    slidenumber++;
    if(slidenumber>2){
        slidenumber=0;
    }
    const slide = document.querySelector(`.images`);
    const slideWidth = 800; 

    slide.style.transform = `translateX(-${slidenumber * slideWidth}px)`; 
})
document.querySelector(".prev").addEventListener("click",function(){
    slidenumber--;
    if(slidenumber<0){
        slidenumber=2;
    }
    const slide = document.querySelector(`.images`);
    const slideWidth = 800; 

    slide.style.transform = `translateX(-${slidenumber * slideWidth}px)`; 
})