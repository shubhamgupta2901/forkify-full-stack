const express = require('express');
const AWS = require('aws-sdk');
const mime = require('mime-types');
const Publisher = require('../../db/models/publisherModel');
const multerMiddleware = require('../middleware/multerMiddleware');
const awsService = require('../../services/awsService')

const router = new express.Router();

router.post('/publishers',multerMiddleware.single('image'),async (request,response)=>{
    const {name} = request.body;
    if(!name){
      return response.status(400).send({error: 'name is required field'})
    }

    try {
      let publisherDocument = await new Publisher({name}).save();
      const imageBuffer = request.file.buffer;
      const imageName = `publishers/image_${publisherDocument._id}.${mime.extension(request.file.mimetype)}`;
      const awsData = await awsService.uploadToS3(process.env.AWS_BUCKET_NAME,imageName,imageBuffer);
      const awsImageUrl = awsData.Location;
      publisherDocument.imageUrl = awsImageUrl;
      const eventualPublisherDocument =  await publisherDocument.save();
      response.status(200).send({response: eventualPublisherDocument});
    } catch (error) {
      response.status(500).send({error: error.message});
    }
});




module.exports = router;