const express = require ('express');
const Testimonial = require('../models/Testimoniales');
const router = express.Router();


/* CONTROLADORES*/
const nosotrosController = require ('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');


module.exports = function(){
    router.get('/',homeController.consultasHomepage); 
    router.get('/nosotros',nosotrosController.infoNosotros);
    router.get('/viajes',viajesController.mostrarViajes);
    router.get('/viajes/:id',viajesController.mostrarViaje);
    router.get('/testimoniales',testimonialesController.mostrarTestimoniales);
    //Cuando se llena el formulario 
    router.post('/testimoniales',testimonialesController.agregarTestimonial);
    
    return router;

 }
 