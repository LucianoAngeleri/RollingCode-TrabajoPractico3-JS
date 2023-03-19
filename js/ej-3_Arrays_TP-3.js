/*
Ejercicio 3 - Arreglos

Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

Ejemplo de salida:

Ejemplo de salida:
| Suma | Aparciciones |
| ---- | ------------ |
|   2  |      1      |
|   3  |      5      |
|   4  |      5      |
|   5  |      4      |
|   6  |      8      |
|   7  |      6      |
|   8  |      5      |
|   9  |      5      |
|  10  |      3      |
|  11  |      6      |
|  12  |      2      |
*/

let apariciones = [];
for (let lanzamiento = 0 ; lanzamiento < 50 ; lanzamiento++) {
    let dado1 = Math.floor(Math.random() * 6 + 1);
    let dado2 = Math.floor(Math.random() * 6 + 1);
    let sumaLanzamiento = dado1 + dado2;
    apariciones.push(sumaLanzamiento)
}


document.write("<section class='container text-center'>")
document.write('<table class="table table-responsive table-striped w-25 text-center">')
document.write("<thead>")
document.write("<tr><th>Suma</th><th>Apariciones</th></tr>")
document.write("</thead>")
document.write("<tbody>")
for (let i = 0; i < apariciones.length; i++) {
    document.write(`<tr>
                    <td>${sumaLanzamiento}}</td>
                    <td>${apariciones}</td>
                </tr>`) 
}
document.write("</tbody>")
document.write("</table>")
document.write("</section>")