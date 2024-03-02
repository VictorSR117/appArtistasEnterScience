const { listArtistsByName } = require("../database/artists/artistisConsults");

const listAllArtistsByName = async (req, res) => {
    try {
        let { name } = req.body;
        res.status(200).json(await listArtistsByName(name));
    }
    catch (error) {
        console.error(error.message);
    }
}

module.exports = { listAllArtistsByName };