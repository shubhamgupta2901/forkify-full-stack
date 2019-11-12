const multer = require('multer');
const acceptedExtensions = ['jpg', 'png', 'jpeg'];
const middleware = multer({
    limits: {
        fileSize: 1*1024*1024, // takes size in byte. 1MB
    },
    fileFilter: (request, file,callback) =>{
        isValidExtenstion = acceptedExtensions.some(extension=> file.originalname.endsWith(`.${extension}`));
        if(isValidExtenstion)
            return callback(null, true);
        return callback(new Error(`Only ${acceptedExtensions.join(', ')} are allowed.`));
    }
});

module.exports = middleware;