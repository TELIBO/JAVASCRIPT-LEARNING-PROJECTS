const images = document.getElementById("images");
const result = document.getElementById("result");
const happy = document.getElementById("happy");
const button = document.getElementById("b1");
const heading = document.getElementById("h1");
let val;
let cal;
let img = [];
let res = [];

button.onclick = function() {
    val = Number(document.getElementById("input").value);
    res = [];
    img = [];
    for (let i = 0; i < val; i++) {
        cal = Math.floor(Math.random() * 6) + 1; 
        res.push(cal);
        img.push(`<img src="images/${cal}.png" alt="Dice ${cal}">`);
    }
    result.textContent = res.join(", ");
    images.innerHTML = img.join(''); 
    let boo=res[0];let fl=1;
    for(let j=1;j<res.length;j++)
        {
            if(boo==res[j])
                {
                    fl=fl+1;
                    boo=res[j];
                }
            else{
                break;
            }
        }
    if(fl===res.length){
        happy.innerHTML=`<img style="width:400px;" src="images/happy.jpg">`;
    }
    else{
        happy.innerHTML=null;
    }
    console.log("Result array: ", res);
    console.log("Image HTML: ", img.join(''));
}
