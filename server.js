import conn from './db.js';

const resultado = await conn.query("SELECT NOW()");
console.log("Hora atual do banco:", resultado.rows[0].now);