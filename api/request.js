require ('dotenv').config()
const Axios = require('axios')
const express = require('express')
const router = express.Router()
const LOL_API_KEY = process.env.LOL_API_KEY

router.get('/request', (req, res) => {
    Axios.get(`https://na1.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1&api_key=${LOL_API_KEY}`)
    .then(response => { 
        res.json(response.data) 
    })
    .catch(err => {
        console.log(err);
    })
})

module.exports = router;