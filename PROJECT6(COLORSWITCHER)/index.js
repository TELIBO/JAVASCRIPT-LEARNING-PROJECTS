const color = document.querySelectorAll("button");
color.forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelector("body").style.backgroundColor = button.id;
        if(button.id==="black"){
            document.querySelectorAll("h1,h2").forEach(function(element){
                element.style.color="white";
            })
        }
    });
});
