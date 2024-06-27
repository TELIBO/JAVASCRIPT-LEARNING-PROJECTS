var you;
var yourscore=0;
var opponent;
var opponentscore=0;
var choices=["rock","paper","scissors"];
window.onload=function(){
    for(let i=0;i<3;i++){
        let image=document.createElement("img");
        image.id=choices[i];
        image.src=choices[i]+".png";
        image.addEventListener("click",onselect);
        document.getElementById("choices").append(image);
    }
}
function onselect(){
    you=this.id;
    document.getElementById("your-choice").src=you+".png";
    opponent=choices[Math.floor(Math.random()*3)];
    document.getElementById("opponent-choice").src=opponent+".png";
    if(you==opponent){
        yourscore++;
        opponentscore++;
    }
    else{
        if(you=="rock"){
            if(opponent=="paper")
                {
                    opponentscore++;
                }
            else{
                yourscore++;
            }
        }
        else if(you=="paper"){
            if(opponent=="scissors")
                {
                    opponentscore++;
                }
            else{
                yourscore++;
            }
        }
        else if(you=="scissors"){
            if(opponent=="rock")
                {
                    opponentscore++;
                }
            else{
                yourscore++;
            }
        }
    }
    document.getElementById("opponent-score").textContent="OPPONENT SCORE:"+opponentscore;
    document.getElementById("your-score").textContent="YOUR SCORE:"+yourscore;
}