let clear = document.getElementById("clearbtn");

let add1 = document.getElementById("increment1");
let remove1 = document.getElementById("decrement1");

let add2 = document.getElementById("increment2");
let remove2 = document.getElementById("decrement2");

let add3 = document.getElementById("increment3");
let remove3 = document.getElementById("decrement3");

let add4 = document.getElementById("increment4");
let remove4 = document.getElementById("decrement4");

let int = document.getElementById("number");
let integer = 0;

clear.addEventListener("click", function(){
    integer = 0;
    int.innerHTML = integer;
})

add1.addEventListener("click", function(){
    integer += 1;
    int.innerHTML = integer;
})

remove1.addEventListener("click", function(){
    integer -= 1;
    int.innerHTML = integer;
})

add2.addEventListener("click", function(){
    integer += 3;
    int.innerHTML = integer;
})

remove2.addEventListener("click", function(){
    integer -= 3;
    int.innerHTML = integer;
})

add3.addEventListener("click", function(){
    integer += 5;
    int.innerHTML = integer;
})

remove3.addEventListener("click", function(){
    integer -= 5;
    int.innerHTML = integer;
})

add4.addEventListener("click", function(){
    integer *= 2;
    int.innerHTML = integer;
})

remove4.addEventListener("click", function(){
    integer /= 2;
    int.innerHTML = integer;
})