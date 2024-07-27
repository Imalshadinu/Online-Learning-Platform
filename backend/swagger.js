// src/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Online Learning Platform API',
    version: '1.0.0',
    description: 'API documentation for my project',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

// Middleware to serve Swagger API docs
const swaggerMiddleware = (req, res, next) => {
  swaggerUi.serve(req, res, next);
};

const setupSwaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwaggerDocs;
