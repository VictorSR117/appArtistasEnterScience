const { listAllRegisterInDb } = require("../database/generics/genericConsults");
const { insertHiring } = require("../database/hiring/hiringConsults");

const listAllHirings = async (req, res) => {
    try {
        res.status(200).json(await listAllRegisterInDb('hirings'));
    }
    catch (error) {
        console.error(error.message);
    }
}

const insertNewtHirings = async (req, res) => {
    let { artist_id, hiring_name, fee, event_date, address } = req.body;

    let hiringInfo = {
        artist_id,
        hiring_name,
        fee,
        event_date,
        address
    }

    let trySaveInDb = await insertHiring(hiringInfo);

    if (!trySaveInDb) return res.json({ msg: "falha ao realizar a contratação" });

    try {
        return res.status(201).send();
    }
    catch (error) {
        console.error(error.message);
    }
}

module.exports = { listAllHirings, insertNewtHirings }