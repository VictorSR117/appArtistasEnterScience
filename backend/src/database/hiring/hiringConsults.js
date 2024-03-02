
const acessDB = require("../connectionDb");

const insertHiring = async hiringData => await acessDB('hirings').insert(hiringData);

module.exports = { insertHiring }