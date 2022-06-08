const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuid } = require('uuid')
const videosFile = fs.readFileSync('./data/videos.json');

router.route('/')
    .get((req, res) => {
        const videos = JSON.parse(videosFile)

        let filteredVids = []

        videos.forEach((item) => {
            filteredVids.push({id: item.id, title: item.title, channel: item.channel, image: item.image})
        })

        console.log(filteredVids)

        res.json(filteredVids)
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