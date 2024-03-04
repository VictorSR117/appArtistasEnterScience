const acessDB = require("../connectionDb");

const listAllRegisterInDb = async tableName => await acessDB(tableName);

const listAllRegisterInDbById = async (tableName, id) => await acessDB(tableName).where({ id }).first();

module.exports = {
    listAllRegisterInDb,
    listAllRegisterInDbById
}