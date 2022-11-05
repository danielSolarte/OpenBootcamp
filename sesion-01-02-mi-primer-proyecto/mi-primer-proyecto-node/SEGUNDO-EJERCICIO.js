const mis_datos = {
    nombre: "Daniel Felipe Solarte Marin",
    edad: 23,
    isDev: true,
    fecha_nacimiento: new Date(1998, 10, 30),
    libro_favorito: {
        titulo: "La Divina Comedia",
        autor: "Dante Alighieri",
        fecha: new Date(23, 5, 1307),
        url: null,
    },

}

const lista_datos = [mis_datos.nombre, mis_datos.edad, mis_datos.dev, mis_datos.fecha_nacimiento, mis_datos.libro_favorito];

console.log(lista_datos);