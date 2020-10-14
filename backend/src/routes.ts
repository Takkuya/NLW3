import {Router} from 'express'
import multer from 'multer'

import uploadConfig from './config/upload'
import OrphanagesController from './controllers/OrphanagesController'

const routes = Router()
const upload = multer(uploadConfig)

//GET = Busca uma informação
//POST = Cria uma informação
//PUT = Edita uma informação
//DELETE = Deleta uma informação

//3 parâmetros, Query Params, Route Params, Body.

routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)
/*Rota para listagem de usuários*/
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create)


export default routes