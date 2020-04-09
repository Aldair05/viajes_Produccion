const Testimonial = require('../models/Testimoniales');

 exports.mostrarTestimoniales = async (req,res)=>{
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales,
        
    })
}

 exports.agregarTestimonial = async (req,res) =>{
    //validar que todos los campos esten llenos 
    let {nombre,correo,mensaje} = req.body;

    let errores =[];
    if(!nombre){
        errores.push({'mensaje':'agrega tu nombre'})
    }
    if(!correo){
        errores.push({'mensaje':'agrega tu Correo'})
    }
    if(!mensaje){
        errores.push({'mensaje':'agrega tu Mensaje'})
    }
    //REvisar por errores
    if(errores.length > 0){
        //Muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales
        })
    }else{
        //Almacenarlo en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));
    }
}