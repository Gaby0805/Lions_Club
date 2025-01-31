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
app.delete('/delete/:id', async(req,res) => {
    try{
        const { id } = req.params;
        await conn.query("select delete_usuario($1)", [id])
        res.status(204).send('funcioando')
    }
    catch (err){
        console.error(err)
        res.status(500).send('erro ao iniciar')
    }
})

app.put('/update/:id', async(req,res) => {
    try{
        const {id} = req.params
        await conn.query("select update_usuario($1, 'jorge','de agusto ferreira','jorginho@dograu.com','bread')", [id])
    }
    catch (err) {
        console.error(err);
    }
})

app.listen(port, () => { 
    console.log('funcionado')
})
