const express = require('express');
const User = require('../../db/models/userModel');
const router = new express.Router();

router.get('/users', async (request,response)=> {
    try {
        const users = await User.find({});
        response.status(200).send(users);
    } catch (error) {
        response.status(200).send({error: error.message});
    }
})
router.post('/users', async(request,response)=>{
    console.log(request.body);
    response.status(200).send(request.body);
});

module.exports = router;
