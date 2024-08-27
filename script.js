let hello=" Qutaiba";


let mondadspen = 40;
let month = 12;

let summa = mondadspen * month;

console.log("Hello" + hello +  "!")
console.log("Du sparar på " + month + " monader " + summa + "kr")

 let doColorBtn = document.getElementById("doColorBtn")

 doColorBtn.addEventListener("click" , () => {

    let setColor = document.getElementById("setColor").value

    console.log("click po knapp satt color till " + setColor)

    document.body.style.backgroundColor = setColor;
 }) 