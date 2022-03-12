const { application } = require('express');
const express = require('express');
const { isValidObjectId } = require('mongoose');
const Post = require('../models/Post');

const router = express.Router();

router.post("/posts", async function(req, res, next) {
    var outputData = { balance: 0 };
    const inputIdTx = req.body.IdTx;
    //console.log(inputIdTx);
    res.json(outputData);
});

module.exports = router;