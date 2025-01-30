import conn from './db.js';
import express from 'express'

const app = express()
const port = 3220

app.post('/create',  async(req, res) => {
    try{
        await conn.query("select insert_usuario('gabriel', 'amorim', 'email', '20579544710', 'bread', 'tp1')")
        res.status(201).send('funcionando')
    }
    catch (err) {
        console.error(err)
        res.status(500).send('erro ao criar')
    }
})

app.listen(port, () => { 
    console.log('funcionado')
})
