// Desestructuración
// Asingación Desestructurante
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usarContexto = ({nombre, edad, clave, rango = 'Capitán'}) => {
    
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1234,
            lng: -15.894
        }
    }

};

const {nombreClave, anios, latlng: {lat, lng}} = usarContexto(persona);
// const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);

