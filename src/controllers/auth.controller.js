// 1. Imports (Se importan librerias y modelo)

const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose')
const User = require('./../models/User')



// 2. Functions Signup (a) get(vista), y b) post(datos del formulario))

// a) Funcion que simplemente renderiza la vista de Sign Up
exports.getSignup = (req, res) => {
    res.render('auth/signup')
}


// b) Funcion que obtiene, valida, datos del formulario enviado por el usuario
exports.postSignup = async (req, res) => {

    // a. Get Data del formulario enviado por el cliente

    const {
        name, 
        email,
        password,  

    } = req.body


    // b. Validaciones (Email, contraseña, regex)

    // Validacion para verificar que el usuario adjunte todos los campos necesarios
   
    if(!name, !email, !password){
        return res.render('auth/signup', {
            msg: 'All fields required.'
        })
    }


    // Regex (Validacion de contraseña, que se cumplan con los requisitos minimos)
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    if(!regex.test(password)){
        return res.render('auth/signup', {
            msg: 'Please include 6 charts, 1 number, 1 uppercas, 1 lowercase'
        })
    }


    try {
        // Encriptacion de la contraseña del usuario
        
        // Numero de veces las cuales se revolvera la contraseña (Seguridad)
        const salt = await bcryptjs.genSalt(10)
        
        // Se guarda la contraseña hasheada dentro de una variable (Documentacion de bcryptjs)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Se crea el usuario (Ya con la contraseña encriptada, lista para MongoDB)
        const createdUser = await User.create({
            name,
            email,
            password: hashedPassword,
            imgUrl
        })


        

        // Crear session del usuario (Pendiente archivo config, session)
        req.session.currentUser = {
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            imgUrl: createdUser.imgUrl
        }

        // Redirection, una vez creado el usuario que me redirija a la vista de usuario en particular
        res.redirect(`auth/login`)


    // Renderizar errores en su caso
    } catch (error) {
        // Validar email desde servidor (Se realiza una verificacion sobre el correo electronico)
        if(error instanceof mongoose.Error.ValidationError){
            res.render('auth/signup', {
                msg: 'Use a valid email'
            })

          // Si usuario ingresa contraseña, o correo incorrecto muestra el siguiente mensaje  
        } else if(error.code === 11000){
            res.render('auth/signup', {
                msg: 'Name or email already exist. Try another.'
            })
        }
    }
}
 
 

// 3. Funcion Login (get(vista), post(obtencion de datos))

// a) Funcion que simplemente renderiza la vista de Login
exports.getLogin = (req, res) => {
    res.render('auth/login')
}



// b) Funcion que obtiene, valida, datos del formulario enviado por el usuario para de tal manera iniciar sesion

exports.postLogin = async(req, res) => {

    // 1. Obtener data del usuario (Destructuracion de objetos: expresión que nos permite desempaquetar valores de arrays u objetos en grupos de variables, permitiéndonos simplificar y crear código más legible)

    const { email, password } = req.body

    // 2. Buscar usuario en la base de datos 
    try{
        // Se busca el usuario creado en DB, y se guarda en una variable
        const findUser = await User.findOne({email})

        // Si no se encuentra el usuario en DB, renderiza usuario no encontrado
        if(!findUser) {
            return res.render('auth/login', {
                msg: 'User not Found'
            })
        }

        // Check Password en DB - nos regresa un booleano, y se guarda en una varibale, (Se utiliza bcryptjs para password encriptado)
        const checkedPassword = await bcryptjs.compareSync(password, findUser.password)

        // Si no encuentra el password nos returna en error de password incorrecto
        if(!checkedPassword){
            return res.render('auth/login', {
                msg: 'Invalid Password'
            })
        }

        // Maneja el tema de la session del usuario (PENDIENTE HACER)
        req.session.currentUser = {
            _id: findUser._id,
            name: findUser.name,
            email: findUser.email,
            imgUrl: findUser.imgUrl
        }

        // Redirect, una vez encontrado, manda al usuario a su pagina personalizada ya loggeado
        res.redirect(`/user/${findUser.name}`)

    } catch(e){
        console.log(e)
    }
}


