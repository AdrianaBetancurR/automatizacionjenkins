const mongoose = require('mongoose');
require('dotenv').config();

const mongoConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
           
        });
        console.log('Conexión exitosa a la base de datos!');
    } catch (error) {
        console.error('Error de conexión a la base de datos:', error.message);
        throw new Error('Error de conexión a la base de datos');
    }
};

module.exports = mongoConnection;
