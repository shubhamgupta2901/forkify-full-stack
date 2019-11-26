const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');
const util =require('util');
const {join} = require('path')

const imagesDirectory = path.join(__dirname,'../../recipe_parser/assets/images');
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);
const readFile = util.promisify(fs.readFile);


const getAllImages = async path => {
  let images = [];
  for (const file of await readdir(path)) {
    if ((await stat(join(path,file))).isDirectory()) {
      const nestedImages = await getAllImages(join(path,file));
      images = [...images,...nestedImages];
    }
    else images = [...images,{path,name:file}];
  }
  return images;
} 

const getFileContent = async (file) => {
  const filepath = path.join(file.path, file.name);
  const fileContent = await readFile(filepath);
  return fileContent;
}

var s3 = new AWS.S3();
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
    let fileContent = await getFileContent(file);
    let params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Body : fileContent,
      Key : process.env.AWS_BUCKET_DIRECTORY_PATH+file.name
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

