const Hike = require('./../models/Hike')

exports.getHikes = async(req, res) => {
    try {
        const hikes = await Hike.find({})
        res.render('hikes/index', {
            hikes
        })
    } catch (error) {
        console.log(error)
    }
}


