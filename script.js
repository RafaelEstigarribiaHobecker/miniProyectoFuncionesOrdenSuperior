// script.js

const productos = [
    {nombre: "Teclado", depto: "IT", precio: 100},
    {nombre: "Monitor", depto: "IT", precio: 400},
    {nombre: "Silla", depto: "Muebles", precio: 250},
    {nombre: "Mouse", depto: "IT", precio: 50},
    {nombre: "AirPods", depto: "IT", precio: 750}

];

// 1. Logica Pura

const productoEstrella = productos
    .filter(p => p.depto === "IT")
    .reduce((max, p) => p.precio > max.precio ? p : max, productos[0]);

// 2. Manipulacion del DOM(Interfaz)

const container = document.getElementById("tarjeta-mejor-producto");

if (productoEstrella) {
    // Usamos Template Literals para un codigo mas limpio

    container.innerHTML = `
        <h3>${productoEstrella.nombre}</h3>
        <p>Departamento: <strong>${productoEstrella.depto}</strong></p>
        <p class="precio">$${productoEstrella.precio}</p>
    `;
}