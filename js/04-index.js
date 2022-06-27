const producto = {
    nombre: 'Monitor 30 Pulgadas',
    precio: 300,
    disponible: true,
};

// Destructuring de objetos

// const nombre = producto.nombre;
// console.log(nombre);


// Extrae y asigna el valor en un solo paso
const { nombre, precio, disponible, noExiste } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);

// Devuelve 'undefined' si no existe la llave en el objeto
console.log(noExiste);