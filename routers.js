const express = require('express')
const router = new express.Router()

router.get('/', async(req, res) => {

    const number = Math.floor(Math.random() * 10); 
    const invites = ['https://google.com', 'https://facebook.com']
    try{

        res.redirect(invite[number]).send(200)


    }

    catch (e) {

        res.status(404).send(e)
    }
    
    
})