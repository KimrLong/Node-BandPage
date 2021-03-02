const express = require('express');
const router = express.Router();
const bandFile = require('../data/band.json');

router.get('/', (req, res)=>{
    let pageBand = bandFile.band;


    console.log(pageBand);
    res.render('index', {
        bandInfo: pageBand
    });
})

let dataFile = require('../data/data.json')

router.get('/',(req,res)=>{
    //code and then res.render
    let albums = dataFile.albums;
    let artist = albums[0].name;
    
    // albums.forEach(albumObj=>{
        
    // })

    res.render('index',{
        artist:artist,
        albums:albums
    });

})

module.exports = router;


