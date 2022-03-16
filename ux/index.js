const express = require('express')
const app = new express()
//par défaut que le GEt donc on rajoute pour gérer les éléments POST
app.use(express.urlencoded({
    extended: true
}));

//fonciont.js
const listefonction = require("./fonction.js");
//listefonction.ChainId()
//listefonction.lastBlockNumber()

//EJS
const ejs = require('ejs')
app.set('view engine', 'ejs')

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static('public'))
app.use('/fakeBayc', express.static('public'));
app.use('/Nefturians', express.static('public'));
//app.set(__dirname + '/public');

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

/* app.get('/',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'dist/index.html'))
    res.render('index') ;
    }) */

app.get('/fakeBayc',(req,res)=>{
    var id = "undifened";
    //res.sendFile(path.resolve(__dirname, 'dist/about.html'))
    res.render('fakeBayc', {idiii: id }) ;
    })

app.get('/fakeBayc/:id', function(req, res) {
    var id = req.params.id;
    //console.log(id)
    res.render('fakeBayc', {idiii: id });
    });

app.get('/fakeMeebits',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'dist/contact.html'))
    res.render('fakeMeebits') ;
    })

app.get('/Nefturians',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'dist/about.html'))
    res.render('Nefturians') ;
    })

app.get('/Nefturians/:adress', function(req, res) {
    var adress = req.params.adress;
    //console.log(adress)
    res.render('Nefturianstoken', {iadressd: adress });
    });

app
    .route("/")
    .get(listefonction.ChainIdBlockNum , function(req, res) {
        console.log(" res : " + res)
    });