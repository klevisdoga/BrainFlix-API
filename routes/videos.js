const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuid } = require('uuid')
const videosFile = fs.readFileSync('./data/videos.json');

router.route('/')
    .get((req, res) => {
        const videos = JSON.parse(videosFile)
        res.json(videos)
    })

    module.exports = router;