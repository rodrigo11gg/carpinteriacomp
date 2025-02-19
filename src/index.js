import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => { res.render('index', (err, html) => {
    if (err) {
      console.error('Error al renderizar la vista:', err)
      res.status(500).send('Error al renderizar la vista')
    } else {
      res.send(html)
    }
  })
})

app.listen(3000, () => {
  console.log('El servidor está siendo escuchado en el puerto 3000')
})