import pg from 'pg';
const { Client } = pg;

const config = {
    user: 'db_mueble_user',
    password: 'kLSSe5c67UWWnjhH5gpOs3Pg5gzc5uAJ',
    database: 'db_mueble',
    host: 'dpg-curqk4aj1k6c73ecjhv0-a.oregon-postgres.render.com',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
};

export async function Conectar() {
    const client = new Client(config);
    try {
        await client.connect();
        console.log('Conexión exitosa');
    } catch (e) {
        console.error('Error al conectar a la base de datos:', e);
    } finally {
        await client.end();
    }
}

export async function ConsultarProductos() {
    const client = new Client(config);
    try {
        await client.connect();
        const result = await client.query('SELECT * FROM productos');
        console.table(result.rows);
        return result.rows;
    } catch (e) {
        console.error('Error al consultar productos:', e);
        throw e; // Asegúrate de lanzar el error para que sea capturado en la ruta
    } finally {
        await client.end();
    }
}