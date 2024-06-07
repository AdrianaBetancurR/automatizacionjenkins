const express = require('express');
const dotenv = require('dotenv');
const mongoConnection = require('./databases/config');
const proyectoRoutes = require('./routes/proyecto');

// Cargar variables de entorno
dotenv.config();

// Crear la aplicación de Express
const app = express();

// Conectar a la base de datos
mongoConnection();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas del proyecto
app.use('/api/proyectos', proyectoRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
