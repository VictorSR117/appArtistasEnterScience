const validateArtistId = (req, res, next) => {
    let { id } = req.query;

    if (!Number.isInteger(parseInt(id))) return res.status(400).json({ error: 'ID deve ser um número inteiro.' })
    else return next();
}

module.exports = {
    validateArtistId
};