// filepath: /c:/carpinteriacomp/src/index.js
import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import router from './routes/index.js' // Asegúrate de que la ruta sea correcta

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Usa el enrutador definido en routes/index.js
app.use(router)
app.use(express.static(join(__dirname, 'public')))

app.listen(3000, () => {
  console.log('El servidor está siendo escuchado en el puerto 3000')
})