const { Router } = require('express');
const { 
    createProyecto, 
    getProyectos,
    updateProyectoByID 
} = require('../controllers/proyecto');

const router = Router();

// Crear proyecto
router.post('/', createProyecto);

// Consultar todos los proyectos
router.get('/', getProyectos);

// Actualizar proyecto por ID
router.put('/:id', updateProyectoByID);

module.exports = router;
