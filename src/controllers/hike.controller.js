const Hike = require('./../models/Hike')

exports.getHikes = async(req, res) => {
        res.render('hikes/index')
}

exports.getCrear = async(req, res) => {
    res.render('hikes/crear')
}


    exports.postHike = async(req,res) => {

        const {
            description,
            imageUrl,
            time,
            location, 
        } = req.body

    if(!time || !location || !imageUrl || !description){
        return res.render('hikes/crear', {
            msg: 'Todos los campos necesarios.'
        })
    }

        // Se crea el usuario (Ya con la contraseña encriptada, lista para MongoDB)
        const createdHike = await Hike.create({
            description,
            imageUrl,
            time,
            location,
        })


        console.log(createdHike)

         
    
        // Redirection, una vez creado el usuario que me redirija a la vista de usuario en particular
        res.redirect('/hikes/index')

    }