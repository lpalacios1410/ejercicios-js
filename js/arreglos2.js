//Metodos y propiedades de los arreglos.

let juegos = ['Valorant', 'WoW', 'Warzone', 'LoL'];
console.log('Largo:', juegos.length);

let primero = juegos[0];  //Puede ser tambien juegos[2-2];
let ultimo = juegos[juegos.length - 1]; 

//Dentro de las llaves se pueden realizar calculos matematicos

console.log ({ primero, ultimo });
//Recorrer todo el arreglo e imprimirlo
juegos.forEach( (element, indice, arr) => {
    console.log ({element, indice, arr});
} );
//Agregar al final del arreglo
let nuevoJuego = juegos.push('FIFA');
console.log({ nuevoJuego, juegos });

//Agregar al inicio del arreglo
nuevoJuego = juegos.unshift('GTA');
console.log({ nuevoJuego, juegos });

//Eliminar un juego del arreglo
let juegoBorrado = juegos.pop()
console.log({ juegoBorrado, juegos });

//Eliminar un juego de alguna posicion en especifico

let pos = 1;
let juegosBorrados = juegos.splice(pos, 1);
console.log ({juegosBorrados, juegos});


//Buscar la posicion de un elemento dentro de un arreglo

let WarIndex = juegos.indexOf('Warzone');
console.log({WarIndex});

//TODO: Referencia.
