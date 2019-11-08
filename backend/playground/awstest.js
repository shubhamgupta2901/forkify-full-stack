const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//configuring the AWS environment
// AWS.config.update({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   });

var s3 = new AWS.S3();
console.log(AWS.config);
var filePath = "./playground/file.txt";

//configuring parameters
var params = {
  Bucket: process.env.AWS_BUCKET_NAME,
  Body : fs.createReadStream(filePath),
  Key : "publishers/"+Date.now()+"_"+path.basename(filePath)
};

// s3.upload(params, function (err, data) {
//   //handle error
//   if (err) {
//     console.log("Error", err);
//   }
//   //success
//   if (data) {
//     console.log("Uploaded in:", data.Location);
//   }
// });


var s3UploadPromise = new Promise(function (resolve, reject){
  s3.upload(params, function(err,data){
    if(err){
      reject(err);
    }else{
      resolve(data);
    }
  })
});

//s3UploadPromise.then(data=> console.log("Uploaded in:", data.Location)).catch(error=> console.log("Error",error));