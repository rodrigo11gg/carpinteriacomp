import pg from 'pg';
const {Client} = pg;

const config={
    user: 'db_mueble_user',
    password: 'kLSSe5c67UWWnjhH5gpOs3Pg5gzc5uAJ',
    database: 'db_mueble',
    host: 'dpg-curqir0fnakc73ersd30-a.oregon-postgres.render.com',
    port: 5432,
    ssl:{
        rejectUnauthorized: false
    }
}
export async function Conectar(){
    const client = new Client(config);
    try{
       await client.connect();
       console.log('Conexión exitosa'); 
    }catch(e){
        console.log(e);
    }
}
export async function ConsultarProductos(){
    const client = new Client(config);
    try{
        await client.connect();
        const result = await client.query('SELECT * FROM producto');
        console.table(result.rows);
    }catch(e){
        console.log(e);
    }
}
