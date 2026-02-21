# Dashboard de Análisis de Inventario (JS ES6+)

Este proyecto es una herramienta de análisis de datos para inventarios, desarrollada aplicando principios de programación funcional y diseño de software modular.

## 🚀 Tecnologías y Estándares
- **HTML5 Semántico**: Uso de estructuras claras para accesibilidad y SEO.
- **CSS3 (Flexbox)**: Diseño responsivo y centrado dinámico sin uso de frameworks externos.
- **JavaScript Moderno (ES6+)**: Implementación de funciones de orden superior (`filter`, `map`, `reduce`) y manipulación eficiente del DOM.

## 🧠 Filosofía de Desarrollo
Siguiendo los principios de **"A Philosophy of Software Design" (John Ousterhout)**, el proyecto se divide en módulos con responsabilidades claras:
1. **Lógica de Datos**: Procesamiento de arreglos de objetos mediante tuberías (pipelines) de datos.
2. **Interfaz de Usuario**: Inyección dinámica de componentes mediante Template Literals, reduciendo la complejidad cognitiva del HTML.

## 📊 Lógica de Negocio (Problema 5)
El motor de la aplicación filtra productos por categoría y determina el "Producto Estrella" utilizando un algoritmo de reducción:



```javascript
const productoEstrella = productos
    .filter(({ depto }) => depto === "IT")
    .reduce((max, p) => p.precio > max.precio ? p : max);