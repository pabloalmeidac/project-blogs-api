const swaggerAutogen = require('swagger-autogen')();

console.log('teste');
const output = './swagger/swagger_output.json';
const endpoint = ['index.js'];

swaggerAutogen(output, endpoint);