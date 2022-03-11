const express = require('express')
const app = new express()
//par défaut que le GEt donc on rajoute pour gérer les éléments POST
app.use(express.urlencoded({
    extended: true
}));
const { isValidObjectId } = require('mongoose');
const modele = require('./models/Post');


//EJS
const ejs = require('ejs')
app.set('view engine', 'ejs')


//import routes
const postsRoute = require('./routes/posts');
app.use('/', postsRoute);

/*
//post
var path = require('path')
var bodyParser = require('body-parser');
app.post('/views/index.ejs', function(req,res){
    console.log('receiving data ...');
    console.log('body is ',req.body);
    res.send(req.body);
});
*/


var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
/*
app.post('/', function(req, res) {
    console.log('post recu');
    console.log(req.body.IdTx);
    res.redirect('posts/' + req.body.IdTx);
});
*/

app.use(express.static('public'))

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'dist/index.html'))
    res.render('index') ;
    })

app.get('/songForACity',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'dist/about.html'))
    res.render('songForACity') ;
    })


app.get('/tokens',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, 'dist/contact.html'))
    res.render('tokens') ;
    })