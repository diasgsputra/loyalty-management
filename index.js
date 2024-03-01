// index.js

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { sequelize } = require('./models'); // Assuming you have your Sequelize models in the models directory
const { specs, swaggerUi } = require('./swagger');
const app = express();
const PORT = process.env.PORT || 9002;

const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
delete cspDefaults['upgrade-insecure-requests'];

app.use(helmet({
    contentSecurityPolicy: { directives: cspDefaults }
}));

// Middleware
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
