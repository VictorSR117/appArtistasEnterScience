const { listArtistsByName } = require("../database/artists/artistisConsults");
const { listAllRegisterInDbById } = require("../database/generics/genericConsults");

const listAllArtistsByName = async (req, res) => {
    try {
        let { name } = req.query;
        res.status(200).json(await listArtistsByName(name));
    }
    catch (error) {
        console.error(error.message);
    }
}

const detailOneArtist = async (req, res) => {
    let { id } = req.query;

    try {
        res.status(200).json(await listAllRegisterInDbById('artists', id));
    }
    catch (error) {
        console.error(error.message);
    }
}

module.exports = { listAllArtistsByName, detailOneArtist };