const acessDB = require("../connectionDb");

const listArtistsByName = async nameSearched => await acessDB('artists').where('name', 'like', `%${nameSearched}%`);

module.exports = { listArtistsByName }