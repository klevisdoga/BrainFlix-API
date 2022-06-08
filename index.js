const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();
const { PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use(express.static('public'))

app.use((req, res, next) => {
    console.log('Incoming request')
    next();
})

const videoRoutes = require('./routes/videos');
app.use('/videos', videoRoutes);

app.listen(PORT, () => console.log('Im listening'));