import express from 'express'
import { userSignup,userlogin } from '../Controller/usercontroller.js'
import {getproducts,getprodbyid} from '../Controller/productcontroller.js'
const router=express.Router()

router.post('/signup',userSignup)
router.post('/login',userlogin)

router.get('/products',getproducts)
router.get('/product/:id',getprodbyid)

export default router;
