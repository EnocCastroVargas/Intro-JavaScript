//Funciones en JS
const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar("Enoc"));
console.log(saludar2("Goku"));
console.log(saludar3("Vegeta"));
console.log(saludar4());

const getUser = () => ({
  uid: "ABC123",
  username: "Goku_2022",
});

const user = getUser();
console.log(user);

//Tarea

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Enoc");

console.log(usuarioActivo);
