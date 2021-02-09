require ('dotenv').config()
const axios = require('axios')
const express = require('express')
const router = express.Router()
const LOL_API_KEY=process.env.LOL_API_KEY

router.get('/request', (req, res) => {
    axios.get(`https://na1.api.riotgames.com/lol/league/v4/entries/RANKED_SOLO_5x5/DIAMOND/I?page=1&api_key=${LOL_API_KEY}`)
    .then(response => { 
        res.json(response.data) 
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;