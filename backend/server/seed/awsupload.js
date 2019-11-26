const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const util =require('util');
const {join} = require('path')

const imagesDirectory = path.join(__dirname,'../../recipe_parser/assets/testImages');
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);


const getAllImages = async path => {
  let images = [];
  for (const file of await readdir(path)) {
    if ((await stat(join(path,file))).isDirectory()) {
      const nestedImages = await getAllImages(join(path,file));
      images = [...images,...nestedImages];
    }
    else images = [...images,file];
  }
  return images;
} 

var s3 = new AWS.S3();

var filePath = path.join(__dirname,"./recipe_template.json");

//configuring parameters

const s3Upload = (params) => {
  return new Promise(function (resolve, reject){
  s3.upload(params, function(err,data){
    if(err){
      reject(err);
    }else{
      resolve(data);
    }
  })
});
}

const uploadFile = async () => {
  const files = await getAllImages(imagesDirectory);
  for (let file of await getAllImages(imagesDirectory)){
    let params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Body : file,
      Key : process.env.AWS_BUCKET_DIRECTORY_PATH+file
    };
    try {
     const data = await s3Upload(params);
     console.log("Uploaded in:", data.Location)
    } catch (error) {
      console.log("Error",error.message);
    }
  } 
};

uploadFile();
// const response = s3Upload().then(data=> console.log("Uploaded in:", data.Location)).catch(error=> console.log("Error",error));
// getAllFiles(imagesDirectory);
