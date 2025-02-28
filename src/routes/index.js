import { Router } from 'express';
import { ConsultarProductos } from '../public/services/conexion.js'; // Asegúrate de que la extensión .js esté incluida
const router = Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Inicio' });
});

router.get('/about', (req, res) => {
    res.render('nosotros', { title: 'Nosotros' });
});

router.get('/tienda', (req, res) => {
    res.render('tienda', { title: 'Tienda' });
});

router.get('/blog', (req, res) => {
    res.render('blog', { title: 'Blog' });
});

router.get('/bot', (req, res) => {
    res.render('bot', { title: 'bot' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contacto' });
});

router.get('/gallery', (req, res) => {
    res.render('gallery', { title: 'gallery' });
});

router.get('/productos', (req, res) => {
    res.render('productos', { title: 'productos' });
});
router.get('/api/get-productos', async (req, res) => {
    try {
        const productos = await ConsultarProductos();
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al consultar productos:', error);
        res.status(500).json({ error: 'Error al consultar productos', details: error.message });
    }
});

export default router;