
const cloudinary = require('../utils/clodinary')
const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {

    res.render('blog')
    
})

