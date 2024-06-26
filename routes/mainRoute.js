const express = require('express')
const router = express.Router()
require('dotenv').config()
const mainCont = require('../controller/mainRouteController')



router.get('/',mainCont.landing)
router.get('/downloader',mainCont.downloader)
router.post('/download', mainCont.instaDwn)
router.get('/about',mainCont.about)
router.get('/contactus', mainCont.contactus)
router.get('/services', mainCont.service )
router.get('/terms-of-service',mainCont.terms)
router.get('/FAQ', mainCont.faq)
router.get('/policy',mainCont.policy)
router.get('/api',mainCont.api)
router.get('/blog',mainCont.blogPage)
router.get('/blogview',mainCont.redirect)   
router.get('/blogview/:id',mainCont.blogView)
router.post('/contact-form',mainCont.contactForm)
router.post('/comment-blog',mainCont.commentBlog)
router.get('/sitemap',mainCont.sitemap)
router.get('/guest-blog-posting',mainCont.guestPosting)
router.post('/guest-blog',mainCont.guestRequest)
router.post('/user-location',mainCont.userLocation)


module.exports = router