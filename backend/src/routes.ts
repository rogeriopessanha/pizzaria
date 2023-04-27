

import {Router} from 'express'
import multer from 'multer'

//-- ROTAS USER --
import {CreateUserController} from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import {DetailUserController} from './controllers/user/DetailUserController'

//-- ROTAS CATEGORY --
import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'

//-- ROTAS PRODUCT --
import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'

//middlewares de autenticação
import { isAuthenticated } from './middlewares/isAuthenticated'

//multer imagens
import uploadConfig from './config/multer'


const router = Router()

const upload = multer(uploadConfig.upload("./temp"))

//-- ROTAS USER --
router.post('/users', new CreateUserController ().handle)

router.post('/session', new AuthUserController ().handle)

router.get('/me', isAuthenticated, new DetailUserController ().handle)


//-- ROTAS CATEGORY --
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)


//-- ROTAS PRODUCT --
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)


export {router}