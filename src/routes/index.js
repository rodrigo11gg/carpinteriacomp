import { Router } from 'express';
import { title } from 'process';
const router = Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Inicio' })
})

router.get('/about', (req, res) => {
    res.render('about', { title: 'Sobre Nosotros' })
})

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contactanos' })
})
   
router.get('/bot', (req, res) => {
    res.render('bot', { title: 'Charla con el bot' })
})

export default router


    