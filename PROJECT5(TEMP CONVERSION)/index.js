let val;
let emotion;
document.getElementById("b1").onclick = function() {
    if (document.getElementById("radio1").checked) {
        val = parseFloat(document.getElementById("input").value);
        if (val >= 40) {
            emotion = "it's getting hot";
        } else if (val > 20 && val < 40) {
            emotion = "it's normal";
        } else {
            emotion = "it's getting cold";
        }
        val = ((val * 9) / 5) + 32;
        document.getElementById("p1").textContent = `${val.toFixed(2)} Fahreneit, ${emotion}`;
    } else if (document.getElementById("radio2").checked) {
        val = parseFloat(document.getElementById("input").value);
        val = (val - 32) * 5 / 9;
        if (val >= 40) {
            emotion = "it's getting hot";
        } else if (val > 20 && val < 40) {
            emotion = "it's normal";
        } else {
            emotion = "it's getting cold";
        }
        document.getElementById("p1").textContent = `${val.toFixed(2)} Celsius, ${emotion}`;
    } else {
        document.getElementById("p1").textContent = `enter unit`;
    }
};
