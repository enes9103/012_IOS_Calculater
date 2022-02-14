//functional buttons
let acbutton = document.getElementById("ac");
let back = document.querySelector(".back");
let percent = document.querySelector(".percent");
let division = document.querySelector(".division");
let multiplication = document.querySelector(".multiplication");
let minus = document.querySelector(".minus");
let total = document.querySelector("#total")
let equals = document.querySelector(".equals");
let dot = document.querySelector(".dot");
//numbers
let number1 = document.querySelector(".number1");
let number2 = document.querySelector(".number2");
let number3 = document.querySelector(".number3");
let number4 = document.querySelector(".number4");
let number5 = document.querySelector(".number5");
let number6 = document.querySelector(".number6");
let number7 = document.querySelector(".number7");
let number8 = document.querySelector(".number8");
let number9 = document.querySelector(".number9");
let number0 = document.querySelector(".number0");
//results
let result1 = document.querySelector(".result1");
let result2 = document.querySelector(".result2");


//Events

number0.addEventListener("click", add0);
number1.addEventListener("click", add1);
number2.addEventListener("click", add2);
number3.addEventListener("click", add3);
number4.addEventListener("click", add4);
number5.addEventListener("click", add5);
number6.addEventListener("click", add6);
number7.addEventListener("click", add7);
number8.addEventListener("click", add8);
number9.addEventListener("click", add9);
acbutton.addEventListener("click", acButton);
percent.addEventListener("click", addPercent);
minus.addEventListener("click", addMinus);
multiplication.addEventListener("click",addMultiplication);
division.addEventListener("click", addDivision);
total.addEventListener("click", addTotal);
equals.addEventListener("click", addEquals);
dot.addEventListener("click", addDot)



//functions

function acButton(){
    result1.innerHTML = ""
    result2.innerHTML = ""
}

function add0(){
    result2.innerHTML += 0
}

function add1(){
    result2.innerHTML += 1
}

function add2(){
    result2.innerHTML += 2
}

function add3(){
    result2.innerHTML += 3
}

function add4(){
    result2.innerHTML += 4
}

function add5(){
    result2.innerHTML += 5
}

function add6(){
    result2.innerHTML += 6
}

function add7(){
    result2.innerHTML += 7
}

function add8(){
    result2.innerHTML += 8
}

function add9(){
    result2.innerHTML += 9
}

function addTotal(){
    result1.innerHTML += result2.innerHTML;
    result1.innerHTML += "+"
    result2.innerHTML = ""
}

function addDivision(){
    result1.innerHTML += result2.innerHTML;
    result1.innerHTML += "/"
    result2.innerHTML = ""
}

function addMinus(){
    result1.innerHTML += result2.innerHTML;
    result1.innerHTML += "-"
    result2.innerHTML = ""
}

function addMultiplication(){
    result1.innerHTML += result2.innerHTML;
    result1.innerHTML += "*"
    result2.innerHTML = ""
}

function addPercent() {
    result1.innerHTML += result2.innerHTML;
    result1.innerHTML += "%"
    result2.innerHTML = ""
}

function addDot(){
    result2.innerHTML += ","
}

function addEquals(){
    if (result1.innerHTML[result1.innerHTML.length-1] == "+"){
        result2.innerHTML = parseFloat(result1.innerHTML) + parseFloat(result2.innerHTML)
        result1.innerHTML = ""
    }else if(result1.innerHTML[result1.innerHTML.length-1] == "-"){
        result2.innerHTML = parseFloat(result1.innerHTML) - parseFloat(result2.innerHTML)
        result1.innerHTML = ""
    }else if(result1.innerHTML[result1.innerHTML.length-1] == "*"){
        result2.innerHTML = parseFloat(result1.innerHTML) * parseFloat(result2.innerHTML)
        result1.innerHTML = ""
    }else if(result1.innerHTML[result1.innerHTML.length-1] == "/"){
        result2.innerHTML = parseFloat(result1.innerHTML) / parseFloat(result2.innerHTML)
        result1.innerHTML = ""
    }else if(result1.innerHTML[result1.innerHTML.length-1] == "%") {
        result2.innerHTML = (parseFloat(result1.innerHTML) * parseFloat(result2.innerHTML)) / 100
        result1.innerHTML = ""
    }
}
