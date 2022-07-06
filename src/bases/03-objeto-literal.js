

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 456487,
        lat: 14.25,
        log: 35.7568
    }
};

// console.table(persona);

//const persona2 = persona; //Solo se copia la referencia en el espacio de memoria y no se debe de hacer

const persona2 = {...persona}; //Manera correcata de copiar un a
persona2.nombre = 'Peter';


console.log(persona);
console.log(persona2);



