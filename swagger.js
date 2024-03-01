// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Login Service API',
            version: '1.0.0',
            description: 'API documentation for the Login Service',
        },
        servers: [
            {
                url: 'http://localhost:9002',
                description: 'Development server',
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the API routes
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
