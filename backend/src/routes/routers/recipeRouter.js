const express = require('express');
const recipeService = require('../../services/recipeService');
const router = new express.Router();

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