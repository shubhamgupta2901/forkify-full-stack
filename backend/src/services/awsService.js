const AWS = require('aws-sdk');

const getS3Instance = () => {
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    })
    let s3 = new AWS.S3();
    return s3;
}

const uploadToS3 = (bucketName=process.env.AWS_BUCKET_NAME, fileName, fileData) => {
    let s3 = getS3Instance();
    let params = {
        Bucket: bucketName,
        Body: fileData,
        Key: fileName,
    }
    return new Promise((resolve, reject)=>{
        s3.upload(params, (error,data)=>{
            if(error){
                reject(error);
            }
            else resolve(data);
        })
    })
}

module.exports = {
    uploadToS3,
}