const express = require('express');
const recipeService = require('../../services/recipeService');
const multerMiddleware = require('../middleware/multerMiddleware');
const Recipe = require('../../db/models/recipeModel');
const router = new express.Router();

router.post('/recipes',async(request,response)=>{
    const mandatoryFields = ['title', 'publisher', 'sourceUrl', 'ingredients'];
    const areMandatoryFieldsPresent = mandatoryFields.every(field => request.body.hasOwnProperty(field));
    if(!areMandatoryFieldsPresent){
        return response.status(400).send({error: 'missing mandatory fields'});
    }
    const recipeDocument = await new Recipe(request.body).save();
    response.status(200).send(recipeDocument);
})

router.get('/recipes',async (request,response)=>{
    const {recipes, error} = await recipeService.getRecipes(request.params);
    if(error){
        response.status(500).send({error: error.message});
    }
    response.status(200).send(recipes);
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