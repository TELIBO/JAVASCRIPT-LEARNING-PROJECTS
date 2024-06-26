let slidenumber=0;
const slide = document.querySelector(`.images`);
const slideWidth = 800; 
document.querySelector(".next").addEventListener("click",function(){
    slidenumber++;
    if(slidenumber>2){
        slidenumber=0;
        slide.style.transition = "transform 0s";
    }
    else{
    slide.style.transition = "transform 1s";}
    slide.style.transform = `translateX(-${slidenumber * slideWidth}px)`; 
})
document.querySelector(".prev").addEventListener("click",function(){
    slidenumber--;
    if(slidenumber<0){
        slidenumber=2;
        slide.style.transition = "transform 0s";
    }
    else{
        slide.style.transition = "transform 1s";}
    slide.style.transform = `translateX(-${slidenumber * slideWidth}px)`; 
})