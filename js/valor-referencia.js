/*Cuando asignamos valores primitivos (Boolean, Null, Undefined, Number, String y Symbol), el valor asignado es una copia del valor que estamos asignando:

let a = 'hola';
let b = a; // asignamos valor de `a` a `b`.
a += '!'; // cambiamos valor de `a` añadiendo ! al final
console.log(a); // hola!
console.log(b); // hola

Pero cuando asignamos valores NO primitivos o complejos (Object, Array y Function), JavaScript copia “la referencia”, lo que implica que no se copia el valor en sí, si no una referencia a través de la cual accedemos al valor original."

const a = [1, 2, 3];
const b = a;
a.push(4);
console.log(a); // [ 1, 2, 3, 4 ]
console.log(b); // [ 1, 2, 3, 4 ] */

let a = 10;
let b = a;
a = 30;

console.log({ a, b });
///

let juan = { nombre: 'Juan' };
let ana  = { ...juan };
ana.nombre = 'Ana';

console.log({ juan, ana });
////

const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );


console.log({ peter, tony });

// Arreglos
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({ frutas, otrasFrutas });

/**/