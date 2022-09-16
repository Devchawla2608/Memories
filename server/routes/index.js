const express = require('express')
const router = express.Router();

const homeController = require('../controller/home_controller')

router.get('/' , homeController.home)
router.use('/posts' , require('./posts') )

module.exports = router;