const api='087894fd404cf5957cc78a6528184d23';
let temp="";
let weatherdetail="";
let weatherdescription="";
let humidity="";
let windspeed="";
let windgust="";
let sunrise="";
let sunset="";
window.onload=async function(){
    document.getElementById("submit").addEventListener("click", async function(e){
        e.preventDefault();
        const city=document.getElementById("input").value.toLowerCase();
        await weather(city);
        value();
    })
}
const weather= async function(city){
    try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`);
    console.log(response);
    const data= await response.json();
    console.log(data);
    temp=String((data["main"]["temp"]-273.15).toFixed(1))+" *C";
    console.log(temp);
    weatherdetail=data["weather"][0]["main"];
    weatherdescription=data["weather"][0]["description"];
    console.log(weatherdescription + weatherdetail)
    humidity=String(data["main"]["humidity"])+"%";
    console.log(humidity);
    windspeed=String(data["wind"]["speed"])+" m/s";
    console.log(windspeed);
    windgust=String(data["wind"]["gust"])+" m/s";
    console.log(windgust);
    sunrise=convert(data["sys"]["sunrise"]);
    sunset=convert(data["sys"]["sunset"]);
    function convert(sun){
       let date =new Date(sun*1000);
       let hours=date.getHours();
       let minutes="0"+date.getMinutes();
       let time= hours+":"+minutes.substr(-2);
       return time;
    }
    console.log(sunrise +" "+sunset)
    return data;
    }
    catch(error){
        console.log("fetch data",error);
    } 
}
const value=function(){
    document.getElementById("temp").textContent=temp;
    document.getElementById("weather").textContent=weatherdescription;
    document.getElementById("humidity").textContent="Humidity >> "+humidity;
    document.getElementById("windspeed").textContent="WindSpeed >> "+windspeed;
    document.getElementById("windgust").textContent="WindGust >> "+windgust;
    document.getElementById("sunrise").textContent="SunRise >> "+sunrise;
    document.getElementById("sunset").textContent="SunSet >> "+sunset;
    let imgsrc=document.getElementById("weatherimage");
    if(weatherdetail.toLowerCase()=="rain")
        {
            imgsrc.src='weather05-512.webp';
        }
    else if(weatherdetail.toLowerCase()=="thunderstorm")
        {
            imgsrc.src='thunderstorm.png';
        }
    else if(weatherdetail.toLowerCase()=="clear")
        {
            imgsrc.src='clear.png';
        }
    else if(weatherdetail.toLowerCase()=="snow")
        {
            imgsrc.src='snow.jpg';
        }
    else{
        imgsrc.src='cloudy.webp'
    }
}
