Descripción
Este proyecto es un backend en Node.js utilizando Express, TypeScript y Swagger. También se utiliza Mongoose para la conexión con una base de datos MongoDB.

Dependencias
Dependencias de producción
dotenv: librería para cargar variables de entorno desde un archivo .env
express: framework para crear aplicaciones web en Node.js
Dependencias de desarrollo
@types/express: definiciones de tipos para Express en TypeScript
@types/jest: definiciones de tipos para Jest en TypeScript
@types/node: definiciones de tipos para Node.js en TypeScript
@typescript-eslint/eslint-plugin: plugin de ESLint para TypeScript
concurrently: ejecuta múltiples comandos en paralelo
eslint: herramienta para identificar y reportar patrones en el código
eslint-config-standard-with-typescript: configuración de ESLint para TypeScript
eslint-plugin-import: plugin de ESLint para revisar declaraciones de import
eslint-plugin-n: plugin de ESLint para revisar el formato de números
eslint-plugin-promise: plugin de ESLint para revisar el uso de Promesas
jest: framework de pruebas para JavaScript
nodemon: herramienta para reiniciar automáticamente la aplicación al detectar cambios
serve: herramienta para servir archivos estáticos desde el directorio de salida
supertest: framework para realizar pruebas de integración HTTP
ts-jest: plugin de Jest para TypeScript
ts-node: herramienta para ejecutar archivos TypeScript directamente sin transpilación manual
typescript: lenguaje de programación tipado y compilado a JavaScript
webpack: herramienta para empacar módulos de JavaScript
webpack-cli: herramienta de línea de comandos para webpack
webpack-node-externals: plugin de webpack para excluir módulos de node_modules en la salida
webpack-shell-plugin: plugin de webpack para ejecutar scripts shell
Scripts de NPM
build: compila el código TypeScript a JavaScript
start: inicia la aplicación en modo producción (requiere previa compilación)
dev: inicia la aplicación en modo desarrollo con reinicio automático y compilación en tiempo real
test: ejecuta las pruebas unitarias con Jest
serve:coverage: inicia un servidor para ver el reporte de cobertura de Jest
Variables de entorno
PORT: puerto en el que se iniciará la aplicación (por defecto 8000)
