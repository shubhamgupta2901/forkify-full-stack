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
});

router.get('/recipes/:id/information',(request,response)=>{
    const id = request.params.id;
    response.status(200).send(id);
});

router.get('/recipes/random',(request,response)=>{
    response.status(200).send({response: 'random'});
});

router.get('/recipes/trending',(request,response)=>{
    response.status(200).send({response: 'trending'});
});

router.get('/recipes/autocomplete',(request,response)=>{
    response.status(200).send({response: 'autocomplete'});
});

router.post('/recipes/submit',(request,response)=>{
    response.status(200).send({response: 'submit recipe'});
});

router.patch('/recipes/:id/information',(request,response)=>{
    response.status(200).send({response: 'submit recipe'});
});

module.exports = router;