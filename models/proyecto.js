const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    numero: {
        type: String,
        unique: true,
        required: [true, 'Número es requerido']
    },
    titulo: {
        type: String,
        required: [true, 'Título es requerido']
    },
    fechaIniciacion: {
        type: Date,
        required: [true, 'Fecha de iniciación es requerida']
    },
    fechaEntrega: {
        type: Date,
        required: [true, 'Fecha de entrega es requerida']
    },
    valor: {
        type: Number,
        required: [true, 'Valor es requerido']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: [true, 'Cliente es requerido']
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: [true, 'Tipo de proyecto es requerido']
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: [true, 'Universidad es requerida']
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: [true, 'Etapa es requerida']
    }
});

module.exports = model('Proyecto', ProyectoSchema);
