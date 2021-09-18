const express = require('express');
const multer = require('multer');
const auth = require('./auth');
const File = require('../models/fileSchema');

var storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'public/images');
    },
    filename: (req,file, cb)=>{
        cb(null,file.originalname);
    }
});

const imgFilter = (req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
        return cb(new Error('You can upload only jpg, jpeg and png files !'), false);
    }
    cb(null,true);
}

const upload = multer({storage:storage, fileFilter:imgFilter});

const uploadImgRouter = express.Router();

uploadImgRouter.route('/')
.post(upload.single('image'),async (req, res) => {
    // uploading files to public/files to access later
    try {
        const newFile = await File.create({
          name: 'sdfghj',
        });
        res.status(200).json({
          status: "success",
          message: "File created successfully!!",
        });
      } catch (error) {
        console.log(error);
      }
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /imgUpload');
});


module.exports = uploadImgRouter;