//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const assetsDirectory = path.join(__dirname,'../../assets');

const loadFileContentFromAsset =(directoryPath,fileName,isPathResolved = false)=>{
    if(!isPathResolved)
        directoryPath = path.resolve(assetsDirectory,directoryPath);
    const filePath = path.resolve(directoryPath,fileName);
    console.log(`Attempting to read file: ${filePath}`)
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        const dataObj =  JSON.parse(dataJSON);
        return {name: fileName,content:dataObj};
    } catch (error) {
        console.log(error+'. Returning empty Array.');
        return [];
    }
}

const loadFileContent = (directoryPath, fileName) => {
    const filePath = path.join(directoryPath,fileName);
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        const dataObj =  JSON.parse(dataJSON);
        return {name: fileName,content:dataObj};
    } catch (error) {
        console.log(error+'. Returning empty Array.');
        return [];
    }
}

const getAllFilesData = (inputFolderName) =>{
    // const directoryPath = `${assetsDirectory}/${inputFolderName}`
    const directoryPath = path.resolve(assetsDirectory, inputFolderName);
    const arr = [];
    const files = fs.readdirSync(directoryPath);
    files.forEach(file=>{
        arr.push(loadFileContentFromAsset(directoryPath,file,true));
    })
    return arr;
}

const writeContentToFile = (outputFolderName, fileName, content) => {
    const dir = path.resolve(assetsDirectory,outputFolderName);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    const dataJSON = JSON.stringify(content);
    try {
        fs.writeFileSync(path.resolve(dir,fileName), dataJSON);
        console.log(`Saved ${fileName} successfully!`);
    } catch (error) {
        console.log(`Could not write ${fileName} `+ error.message);
    }  
}

const getJSONSize = (foldername = 'raw') =>{
    const folderPath = path.resolve(assetsDirectory, foldername);
    const data = getAllFilesData(folderPath);
    const size = data.reduce((accumulator,currentElement)=> accumulator+currentElement.content.size,0);
    return size;
}

const getFileExtension = (filename) =>
{
  let ext = /^.+\.([^.]+)$/.exec(filename);
  return ext == null ? "" : ext[1];
}
module.exports = {
    loadFileContent,
    loadFileContentFromAsset,
    getAllFilesData,
    writeContentToFile, 
    getJSONSize,
    getFileExtension
};


