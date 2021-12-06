const User = require('./../models/User')


exports.getProfile = (req, res) => {
    res.render('user/profile')
}


exports.viewEditUser = async (req, res) => {

	const singleUserID = req.params.userID

	const getTheUser = await User.findById(singleUserID)

	res.render("user/edit", {
		data: getTheUser
	})
}




exports.editUser = async(req, res) => {
	console.log(req.body, req.params)
	// 1. ID del libro a editar
	const {userID} = req.params

	// 2. Los nuevos cambios del formulario

	const imageUrl = req.body.imageUrl

	// 3. Realizar la actualizacion en la base de datos

	// Lo busca en la base de datos por su ID, donde le menciona que se le pasaran nuevos arguments
	const updatedUser = await User.findByIdAndUpdate(
		userID,
		{imageUrl},
		{new: true}		
	)


	console.log(updatedUser)

	// Al actulizarlo me manda a la pagina ya con el libro actualizado en particular
	res.redirect(`/user/${updatedUser._id}`)

}







// d) Delete 

exports.deleteUser = async (req, res) => {

	// Identificar el libro que quiero borrar
	const userID = req.params.UserID

	// Borrado en base de datos
	const deletedUser = await User.findByIdAndDelete(userID)

	console.log(deletedUser)

	// Redireccion
	res.redirect("./../")


}