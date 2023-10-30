//Escribir una función llamada contrasenaValida que reciba un string y 
//retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". 
//De lo contrario debe retornar false.

let x = '2Fj(jjbFsuj';
let y = 'eoZiugBf&g9';


function contrasenaValida(string){
    if (string === x || string=== y){
        return true;
    } else return false;
}


  // código de prueba
  console.log(contrasenaValida("2Fj(jjbFsuj")) // true
  console.log(contrasenaValida("eoZiugBf&g9")) // true
  console.log(contrasenaValida("hola")) // false
  console.log(contrasenaValida("")) // false

console.warn('ejercicio 2');

//Escribir una función llamada calcularImpuestos que reciba dos 
//argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 
//18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos 
//* 40%. De lo contrario retornar 0.

function calcularImpuestos(edad, ingresos){
    if (edad >= 18 && ingresos >= 1000){
        return ingresos*0.4
    }else{
        return 0;
    }
}
    console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0

console.warn('ejercicio 3');

//Escribir una función llamada imprimirArreglo que reciba un 
//arreglo e imprima cada elemento en una línea a parte:

function imprimirArreglo(arreglo1){
    for (let i=0; i<arreglo1.length; i++){
        console.log(arreglo1[i]);
    }
}

imprimirArreglo([1, 'Hola', 2, 'Luis', 3, 'Palacios'])

console.warn('ejercicio 4');

//Escribe una función llamada likes que reciba un número y retorne un 
//string utilizando el formato de K para miles y M para millones.

//Por ejemplo:

//1400 se convierte en 1K
//34,567 se convierte en 34K
//7’456,345 se convierte en 7M.
//Si el número es menor a 1000 se debe devolver el mismo número como un string.

function likes(numero1){
    
    if (numero1.toString().length>=4 && numero1.toString().length<6){
        return Math.trunc(numero1/1000) + 'K';
    } else {
        if (numero1.toString().length>=7 && numero1.toString().length<10){
        return Math.trunc(numero1/1000000) + 'M';
        } else return numero1.toString();
    }
    }

    console.log(likes(983)) // "983"
    console.log(likes(1900)) // "1K"
    console.log(likes(54000)) // "54K"
    console.log(likes(120800)) // "120K"
    console.log(likes(25222444)) // "25M"

    console.warn('ejercicio 5');

    //Escribir una función llamada contarRango que reciba dos números y 
    //retorne cuántos números que hay entre ellos (excluyéndolos):

    //Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer 
    //número va a ser menor que el segundo.

    function contarRango(num1,num2){
        for (let i=num1; i<num2; i++){
        resultado = num2 - num1 -1
        }
        return resultado
}
    contarRango(1332, 8743)



      // código de prueba
      console.log(contarRango(1, 20)) // 7
      console.log(contarRango(1332, 8743)) // 7410
      console.log(contarRango(5, 6)) // 0


    console.warn('ejercicio 6');

    //Escribir una función llamada sumarRango que reciba dos argumentos: 
//número inicial y número final. La función debe retornar la suma de los 
//números en ese rango (incluyéndolos).

//Nota: puedes asumir que el número inicial va a ser menor o igual que 
//el número final.

function sumarRango(numInicial,numFinal){
    let suma=0
        for(let i=numInicial; i<=numFinal;i++){
        suma = suma + i
} 
return suma;
}

sumarRango(12, 14)

// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

console.warn('ejercicio 7');


function mostrarFechaHora() {
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; // Los meses empiezan en 0, por lo que se suma 1
    let año = fecha.getFullYear();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    console.log("Fecha: " + dia + "/" + mes + "/" + año);
    console.log("Hora: " + hora + ":" + minutos + ":" + segundos);
}

mostrarFechaHora();

console.warn ('ejercicio 8');

//Escribir un script que diga si un número es par o es impar.
//Recordemos que un número es par si al dividirlo por 2 da como resto 0.

function ParImpar( par ){
    
    if ( par % 2 === 0){
        return 'El numero es par';

    }else{
    return 'El numero es impar';
    }
}   

console.log(ParImpar(25));


console.warn ('ejercicio 9');

//Ejercicio que determine si un numero es positivo o negativo
function positivoNegativo(numero){
    
    if (numero>= 0){
        return 'Es positivo';
    }else
    return 'Es negativo'
}

console.log(positivoNegativo(3));

console.warn('ejercicio 10');

//Escribir una función llamada sumarArreglo que reciba un arreglo 
//de números y retorne la suma de todos los elementos.

function sumarArreglo (arr){
    let suma = 0;
    for(let i = 0; i < arr.length; i++){
        { suma +=arr[i];
        }
    }
    return suma;

}

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0






