const express = require('express');
const Publisher = require('../../db/models/publisherModel');

const router = new express.Router();
router.post('/publishers', async (request,response)=>{
    const publisherDocument = new Publisher(request.body);
    try {
        await publisherDocument.save();
        response.status(200).send(request.body);
    } catch (error) {
        response.status(400).send({error : error.message});
    }
})

module.exports = router;