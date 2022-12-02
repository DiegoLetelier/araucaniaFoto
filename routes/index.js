const express = require('express')

const router = express.Router()

const {createUser, getUser, deleteUser, editUser, login, validateToken } = require('../controllers/userControllers')

const {createProduct,  getAllProducts, getQtyProducts, editProduct} = require('../controllers/productControllers')

const {createJob, getQtyJobs} = require('../controllers/jobControllers')

const getUsers = require('../controllers/adminControllers')

const {auth} = require('../middlewares/auth')

// Products

router.route('/producto')
.post(auth, createProduct)

router.route('/producto/:id')
.put(editProduct)

router.route('/productos')
.get(getAllProducts)

router.route('/producto/:qty')
.get(getQtyProducts)

// Jobs

router.route('/jobs')
.post(createJob)

router.route('/jobs/:qty')
.get(getQtyJobs)



//Users and Admins

router.route('/admin')
.post(auth, createUser)
.get(getUsers)
.put(editUser)
.delete(deleteUser)


router.route('/usuario')
.post(createUser)



router.route('/usuario/:id')
.get(getUser)
.put(editUser)

router.route('/usuariologin')
.post(login)

router.route('/usuariotoken')
.get(auth, validateToken)


module.exports = router