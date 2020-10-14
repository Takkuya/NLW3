import express from 'express'
import path from 'path'
import cors from 'cors'
import 'express-async-errors'
import './database/connection'

import routes from './routes'
import errorHandler from './errors/handler'

const app = express()

/*Desse modo o express passa a entender o formato JSON*/
app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)
/*Porta do backend*/
app.listen(3333);