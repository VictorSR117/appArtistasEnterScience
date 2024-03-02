const acessDB = require("../connectionDb");

const listAllRegisterInDb = async tableName => await acessDB(tableName);

module.exports = {
    listAllRegisterInDb
}