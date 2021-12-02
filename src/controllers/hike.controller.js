const Hike = require('./../models/Hike')




// 2. FUNCIONES




// a) Get all Hikes (Read)
exports.gethikes = async(req, res) => {
    try {
        const allHikes = await Hike.find({})
        res.render('hikes/index', {
            allHikes
        })
    } catch (error) {
        console.log(error)
    }
}


exports.getSingleHike = async (req, res) => {


	// Funcion que me permite obtener la ruta de un hike en particular por su ID
	const singleHikeID = req.params.hikeID

	const getTheHike = await Hike.findById(singleHikeID)

	if(req.session.currentUser.name === getTheHike.name){
		res.render("hikes/single", {
			data: {getTheHike, owner: true}
		})

		return 
	}

	console.log(getTheHike)

	// Renderizamos la informacion del hike en particular al cual le damos click
	res.render("hikes/single", {
		data: getTheHike
	})


}





// b) Create views and hikes
exports.viewCreateHike = async (req, res) => {

	res.render("hikes/crear")

}

exports.createHike = async (req, res) => {

	console.log(req.body)

	// Info a mostar al crear mi nuevo libro
	const name =  req.session.currentUser.name
	const description = req.body.description
	const imageUrl = req.body.imageUrl
	const location = req.body.location
    const time = req.body.time


	const newHikeCreated = await Hike.create({name, description, imageUrl, location, time})

	console.log(newHikeCreated)

	// Una vez generado el nuevo libro me redirige a la pagina principal de liros
	res.redirect("/hikes")

	console.log("Datos recibidos")

}



// c) Edit views and hikes


exports.viewEditHike = async (req, res) => {

	const singleHikeID = req.params.hikeID

	const getTheHike = await Hike.findById(singleHikeID)

	res.render("hikes/edit", {
		data: getTheHike
	})
}




exports.editHike = async(req, res) => {
	console.log(req.body, req.params)
	// 1. ID del libro a editar
	const {hikeID} = req.params

	// 2. Los nuevos cambios del formulario

	const description = req.body.description
	const time = req.body.time
	const location = req.body.location
	const imageUrl = req.body.imageUrl
	const name =  req.session.currentUser.name

	// 3. Realizar la actualizacion en la base de datos

	// Lo busca en la base de datos por su ID, donde le menciona que se le pasaran nuevos arguments
	const updatedHike = await Hike.findByIdAndUpdate(
		hikeID,
		{name, description, imageUrl, location, time},
		{new: true}		
	)


	console.log(updatedHike)

	// Al actulizarlo me manda a la pagina ya con el libro actualizado en particular
	res.redirect('/hikes')

}







// d) Delete 

exports.deleteHike = async (req, res) => {

	// Identificar el libro que quiero borrar
	const hikeID = req.params.hikeID

	// Borrado en base de datos
	const deletedHike = await Hike.findByIdAndDelete(hikeID)

	console.log(deletedHike)

	// Redireccion
	res.redirect("/hikes")


}