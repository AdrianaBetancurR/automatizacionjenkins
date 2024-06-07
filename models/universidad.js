const { Schema, model } = require('mongoose');

const UniversidadSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre es requerido'],
    },
    direccion: {
        type: String,
        required: [true, 'Dirección es requerida'],
    },
    telefono: {
        type: String,
        required: [true, 'Teléfono es requerido'],
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Universidad', UniversidadSchema);
