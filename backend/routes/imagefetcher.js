const express = require('express');
// const multer = require('multer');
// const auth = require('./auth');
const File = require('../models/fileSchema');
const fetcher = express.Router();
const fs = require('fs');
var path = require('path');

fetcher.route('/')
.get(async (req, res) => {
    try {
      const files = await File.find();
      res.status(200).json({
        status: "success",
        files,
      });
    } catch (error) {
      res.json({
        status: "Fail",
        error,
      });
    }
});

fetcher.route('/:fileName')
.get(async (req, res) => {
    try {
        var options = {
            root: path.join(__dirname, "/../public/images/")
        };
        var fileName = req.params.fileName;
        res.sendFile(fileName, options, function (err) {
            if (err) {
                res.status(404).json({status:404, file: options.root+fileName});
            } else {
                console.log('Sent:', fileName);
            }
        });
    } catch (error) {
        res.json({
            status: "Fail",
            error,
        });
    }
});
        

module.exports = fetcher;