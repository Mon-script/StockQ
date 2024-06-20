const connection = require('../models/db')

module.exports.getSalida = (req, res) =>{
    const consult = 'SELECT * FROM SALIDA';

    try {
        connection.query(consult, (err, results)=>{
            console.log(results)
            res.json(results)
        });
    } catch (e) {
        console.log(e)

    }
}