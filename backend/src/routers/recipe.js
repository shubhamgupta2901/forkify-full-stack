const express = require('express');
const Recipe = require('../models/recipe');
const router = new express.Router();

router.get('/recipes',async (request,response)=>{
    const mongoQuery = {};
    try {
        const recipes = await Recipe.find(mongoQuery);
        response.status(200).send(recipes);
    } catch (error) {
        response.status(500).send({error: error.message});
    }
})

module.exports = router;