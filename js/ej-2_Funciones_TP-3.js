/*
Ejercicio 5
Realizar una página con un script que calcule el valor de la letra 
de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes: 
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y 
volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/
let dni;
let continuar = false;
const letrasSegunResto = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
let letraAsignada = "";
do {
    dni = parseInt(prompt("Ingrese un número de DNI"))
    if (isNaN(dni) || (dni < 0 && dni > 99999999)){
        alert("No ingresó un número válido")
        continuar = confirm("Desea repetir el ingreso de DNI?")
    }else if (dni >= 0 && dni <= 99999999){
        resto = dni % 23
        letraAsignada = letrasSegunResto[resto]
        document.write(`<h5 class="display-3 text-center">Resultado</h5>"`);
        document.write(`<p class="text-center text-success fs-1">El número de DNI ingresado es ${dni}</p>"`);
        document.write(`<p class="text-center text-success fs-1">La letra asignada según su DNI es ${letraAsignada}</p>"`);
        continuar = confirm("Desea ingresar otro número de DNI?")
    }
} while (continuar);

if(letraAsignada===""){
    document.write(`<p class="text-center text-danger fs-1">No ingresó un número de DNI.</p>"`);
}
