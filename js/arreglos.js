//Los arreglos son como una lista tipo supermercado.
//Contienen un grupo de elementos internamente.
//Usualmente toda la informacion dentro, es del mismo tipo de dato.
//Los arreglos en JS empiezan con la posicion 0.

//Dentro de los arreglos se puede almacenar cualquier cosa.
//Se pueden agregar funciones 'function'.


//let videoJuegos= ['Valorant', 'WoW', 'Warzone']
//videoJuegos[1]; // Trae -> WoW

//const arr = new Array(10); // Hay 10 elementos internamente pero vacios, no es usual!
    //const arr = []; //Otra manera de crearlo.

let videoJuegos= ['Valorant', 'WoW', 'Warzone'];
//console.log({videoJuegos});

//console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Luis',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Sona',[
        'Pedro',
        'Elias',
    ]],
];

//console.log({arregloCosas});

console.log (arregloCosas[7][4][1]);

