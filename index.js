// declare the variables first.
let x;
let y;
let z;

// using Math.random and select the random value.
document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;

    // check the all the cubes values are same and display the massage.
    if((x==y)&&(y==z)){
        document.getElementById("msg1").innerHTML = "Congradulations all cubes are same. you are the winner.!!!"
    }

    // dual cubes values are same and display the message.
    if((x==y)||(y==z)||(x==z)){
        document.getElementById("msg1").innerHTML = "Great..!!! two cubes are same. your goal ahead. Try more."
    }
}
