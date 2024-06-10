const movie="|c|h|e|n|n|a|i| |e|x|p|r|e|s|s|"
var show="|_|_|_|_|_|_|_| |_|_|_|_|_|_|_|"
let r;let index;let at=0;
document.getElementById("button").onclick=function(){
    r=document.getElementById("input").value;
    if(show===movie)
        {
            document.getElementById("h1").textContent="you won";
            document.getElementById("answer").textContent="(*^*)";
        }
    if (r.length !== 1) {
        document.getElementById("h1").textContent = "Please enter a single letter.";
        return;
    }

    let found = false;
    for (let i = 0; i < movie.length; i++) {
        if (movie[i] === r) {
            show = show.substring(0, i) + r + show.substring(i + 1);
            found = true;
        }
    }
    if(found)
        {
            at=at+1;
            document.getElementById("movie").textContent=show;
            if(show!==movie)
                {
                document.getElementById("h1").textContent=`attempt ${at}`;
                }
        }
    else {
        if(show!==movie)
            {
                document.getElementById("h1").textContent="wrong attempt";
            }
    }
    
}