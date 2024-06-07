const { Schema, model } = require('mongoose');

const TipoProyectoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido'],
        unique: [true, 'El nombre debe ser único']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
}, {
    collection: 'tipoproyectos'  // Nombre de la colección
});

module.exports = model('TipoProyecto', TipoProyectoSchema);
