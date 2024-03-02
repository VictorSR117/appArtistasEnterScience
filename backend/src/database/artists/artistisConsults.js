const acessDB = require("../connectionDb");

const listArtistsByName = async nameSearched => await acessDB('artists').where('name', 'like', `%${nameSearched}%`);

const listArtistsByid = async idSearched => await acessDB('artists').where({ id: idSearched }).first();

module.exports = { listArtistsByName, listArtistsByid }