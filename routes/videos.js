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

        res.json(filteredVids)
    })
    .post((req, res) => {
        const newVideo = {...req.body, id: uuid(), views:'10', likes: '10', timestamp: new Date(), channel: 'BrainFlix Official', image:'http://localhost:8080/images/API_thumbnail_photo.jpeg'}

        const videos = JSON.parse(videosFile)

        let allVideos = [...videos, newVideo]
        fs.writeFileSync('./data/videos.json', JSON.stringify(allVideos));
        res.status(201).json(allVideos);
    })
    router.get('/:videoId', (req, res) => {
        const videos = JSON.parse(videosFile)

        const singleVideo = videos.find(video => video.id === req.params.videoId)

        if (!singleVideo){
            res.status(404).send("Video not found")
        }
        res.json(singleVideo)
    })


    module.exports = router;