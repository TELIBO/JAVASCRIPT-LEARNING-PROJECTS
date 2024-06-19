const form = document.querySelector("form");
let random = Math.floor(Math.random() * 100) + 1;
let attempt = 10;
let prev = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const num = document.getElementById("number").value;
    
    if (attempt < 2) {
        document.getElementById("number").disabled = true;
        document.getElementById("result").textContent = `YOU LOSE! ANSWER WAS ${random}`;
    } else if (num == random) {
        document.getElementById("number").disabled = true;
        document.getElementById("result").textContent = `YOU WON! ANSWER WAS ${random}`;
    } else {
        if (num < random) {
            document.getElementById("result").textContent = "TOO LOW!";
        } else if (num > random) {
            document.getElementById("result").textContent = "TOO HIGH!";
        }
        prev += `|${num}`;
        document.getElementById("previous").textContent = prev;
        attempt -= 1;
        document.getElementById("attempts").textContent = `${attempt}`;
    }
});

document.getElementById("restart").onclick = function() {
    document.getElementById("number").disabled = false;
    random = Math.floor(Math.random() * 100) + 1;
    attempt = 10;
    document.getElementById("attempts").textContent = `${attempt}`;
    prev = "";
    document.getElementById("previous").textContent = prev;
    document.getElementById("result").textContent = `GAME RESTARTED`;
};
