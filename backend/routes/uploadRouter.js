const express = require('express');
const multer = require('multer');
const auth = require('./auth');
const File = require('../models/fileSchema');

var storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null,'public/files');
    },
    filename: (req,file, cb)=>{
        cb(null,file.originalname);
    }
});

const pdfFileFilter = (req,file,cb)=>{
    if(!file.originalname.match(/\.(pdf)$/)){
        return cb(new Error('You can upload only PDF files !'), false);
    }
    cb(null,true);
}

const upload = multer({storage:storage, fileFilter:pdfFileFilter});

const uploadRouter = express.Router();

uploadRouter.route('/')
.post(upload.single('PDFfile'),async (req, res) => {
    // uploading files to public/files to access later
    try {
        const newFile = await File.create({
          name: req.file.filename,
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


module.exports = uploadRouter;