import pkg from "pg";
const { Pool } = pkg;

const conn = new Pool ({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    password: '0805',
    database: 'Lions_Club'
})

conn.connect().then(() => console.log('connect'))

export default conn