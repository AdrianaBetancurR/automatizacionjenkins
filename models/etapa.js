const { Schema, model } = require('mongoose');

const EtapaSchema = Schema({
    nombre: {
        type: String,
        enum: ['anteproyecto', 'entrega parcial 1', 'entrega parcial 2', 'entrega final'],
        required: [true, 'Nombre es requerido'],
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

module.exports = model('Etapa', EtapaSchema);
