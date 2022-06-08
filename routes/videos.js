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
    // .post((req, res) => {

    // })
    router.get('/:videoId', (req, res) => {
        const videos = JSON.parse(videosFile)

        const singleVideo = videos.find(video => video.id === req.params.videoId)

        if (!singleVideo){
            res.status(404).send("Video not found")
        }
        res.json(singleVideo)
    })


    module.exports = router;