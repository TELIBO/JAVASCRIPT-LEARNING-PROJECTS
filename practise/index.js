document.getElementById("h1").textContent='hello';
let fullname="sanjay";
let age=25;
let isStudent=false;
document.getElementById("p1").textContent=`your name is ${fullname}`;
document.getElementById("p2").textContent=`you are ${age} years old`;
document.getElementById("p3").textContent=`you are student ${isStudent}`;
let username;
document.getElementById("submit").onclick=function(){
    username=document.getElementById("myinput").value;
    document.getElementById("h1").textContent=`hello ${username}`;
}
let x="";
let y="";
let z="";
x=Number(x);
y=String(y);
z=Boolean(z);
console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);

let radius;
let circum;
const PI=3.14;
document.getElementById("calculate").onclick=function(){
    radius=document.getElementById("input").value;
    radius=Number(radius);
    circum=2*PI*radius;
    document.getElementById("answer").textContent=circum;
}
const email="sanjay@gmail.com";
let usrname=email.slice(0,email.indexOf("@"));
console.log(usrname);
let r=window.prompt("Enter your name:")
r=r.trim().charAt(0).toUpperCase()+r.trim().slice(1,r.indexOf(" ")).toLowerCase()+" "+r.trim().charAt(r.indexOf(" ")+1).toUpperCase()+r.trim().slice(r.indexOf(" ")+2).toLowerCase();
console.log(r);