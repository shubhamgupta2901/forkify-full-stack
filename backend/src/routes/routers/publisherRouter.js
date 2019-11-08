const express = require('express');
const mime = require('mime-types');
const Publisher = require('../../db/models/publisherModel');
const multerMiddleware = require('../middleware/multerMiddleware');
const awsService = require('../../services/awsService')
const publisherService = require('../../services/publisherService');

const router = new express.Router();
/**
 * Save a new document with only field name, 
 * Use multer to recieve a single file which was attached in request body with key 'image'
 * Use multer middleware to validate the size and type of file.
 * Upload this image to aws s3 by filename image_{document._id}.{file_extension}
 * Use mime-types to get the file_extension from file's mime-type
 * save the image url obtained from successful upload of file to aws in the mongodb document.
 */
router.post('/publishers',multerMiddleware.single('image'),async (request,response)=>{
    const {name} = request.body;
    if(!name || !request.file){
      return response.status(400).send({error: 'name and image are mandatory fields.'})
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

router.get('/publishers',async(request, response)=>{
    try {
      const publishers = await publisherService.getPublishers();
      response.status(200).send(publishers);
    } catch (error) {
      response.status(500).send({error: error.message});
    }
})

module.exports = router;