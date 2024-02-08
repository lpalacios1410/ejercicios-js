//Los objetos son conocidos por tener pares de valores.
//Si el personaje es const, se le puede modificar las propiedades, pero...
//No puede asignarle un nuevo objeto al personaje o arreglo.


let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 30,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Caracas, Venezuela'
    },
    'ultima-Pelicula':'Infinity War'
};


console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje['edad']);
console.log('Coors: ', personaje.coords.lat);
console.log('Nro. Trajes: ', personaje.trajes.length);
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log ('Vivo:', personaje[x]);
console.log('Ultima pelicula:', personaje['ultima-Pelicula']);

 //Mas detalles

 //Como borrar una propiedad de un objeto
delete personaje.edad;
console.log(personaje);

//Crear una nueva propiedad
personaje.casado = true;


//Cambiar el objeto a un arreglo
const entriesPares = Object.entries( personaje );
console.log (entriesPares);
//Crear una nueva propiedad
personaje.casado = true;

Object.freeze(personaje);

personaje.dinero = 10000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Canada';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log(propiedades, valores);






