const { listArtistsByid } = require("../database/artists/artistisConsults");

const validateHiringFields = async (req, res, next) => {
    let { artist_id, hiring_name, event_date, fee } = req.body;

    if (!artist_id || !hiring_name || !event_date) return res.status(400).json({ error: 'Preencha os camps obrigatórios' });

    let artist = await listArtistsByid(artist_id);
    if (artist.length == 0) return res.status(400).json({ msg: "O artista não existe" });

    if (isNaN(fee) || fee < 0) return res.status(400).send({ error: 'O cache deve ser um número maior ou igual a 0' });

    if (event_date < new Date()) return res.status(400).json({ msg: 'Data inválida' });

    return next();
}

module.exports = validateHiringFields