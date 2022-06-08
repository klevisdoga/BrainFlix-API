const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

app.use((req, res, next) => {
    console.log('Incoming request')
    next();
})

const videoRoutes = require('./routes/videos');
app.use('/videos', videoRoutes);

app.listen(8080, () => console.log('Im listening'));