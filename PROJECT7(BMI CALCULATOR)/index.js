const form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    const weight=parseInt(document.getElementById("weight").value);
    const height=parseInt(document.getElementById("height").value);
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    document.getElementById("para").innerHTML=`YOU HAVE ${bmi} BMI index`;
    if(bmi<=18.6){
        document.getElementById("p2").innerHTML="YOU ARE UNDERWEIGHT"
    }
    else if(bmi>18.6&&bmi<=24.9){
        document.getElementById("p2").innerHTML="YOU ARE IN GOOD SHAPE"
    }
    else{
        document.getElementById("p2").innerHTML="YOU ARE OVERWEIGHT"
    }
})