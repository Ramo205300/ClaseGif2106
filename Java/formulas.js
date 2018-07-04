/*var numero1 = prompt("Ingrese un numero : ");
var numero2 = prompt("Ingrese un segundo numero : ");
var suma = numero1 + numero2;        
document.getElementById("Suma").innerHTML = suma;*/
// console.log(suma);

var button = document.getElementById("Sumar")

button.addEventListener("click", function () {

    var op1 = prompt("Por favor Digite 1 para suma o 2 para Resta")


    if (parseInt(op1) == 1 || parseInt(op1) == 2) {

        if (parseInt(op1) == 1) {
            alert(" Realizara una Suma");
            var num1 = prompt("Ingrese un numero : ");
            var num2 = prompt("Ingrese un segundo numero : ");
            var result = suma(num1, num2);

        } else {
            alert("Realizara una resta")
            var num1 = prompt("Ingrese un numero : ");
            var num2 = prompt("Ingrese un segundo numero : ");
            var result = resta(num1, num2);
        }
    } else {
        alert("No se puede reaizar operacion");
        var result = "No se Pudo Intentalo otra vez";
    }

    document.getElementById("resultado").innerHTML = result;
});

function suma(numero1, numero2) {
    var num1 = numero1;
    var num2 = numero2;
    var sum = parseInt(num1) + parseInt(num2);
    return sum;

}

function resta(numero1, numero2) {
    var num1 = numero1;
    var num2 = numero2;
    var res = parseInt(num1) - parseInt(num2);
    return res;

}