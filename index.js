const express = require('express')
const router = require('./routers')

const app = express()
const port = 3000

app.use(express.json())

app.get('/', async(req, res) => {

    const number = Math.floor(Math.random() * 3); 
    const invites = ['https://google.com', 'https://facebook.com']
    try{

        const website = invites[number].toString()
        res.redirect(website)


    }

    catch (e) {

        res.status(404).send('Nothing')
        console.log('nothing');
        
    }
    
    
})

app.listen(port, () => {

    console.log('Server is up on port' + port);
    
})