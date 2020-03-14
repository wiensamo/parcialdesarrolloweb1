const express = require ('express');

const appServer = express();
appServer.use(express.json());
appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
   });
//variables glovales
var pandemias =[];

appServer.get ('/', (req, res) => {res.send ('HELLO WORLD WITH EXPRESS!!!');});

appServer.use(express.json());

var pais = require('./pais.js');
let pais=new pais();
var pandemia = require('./pandemia.js');
let pandemia=new pandemia();

const pandemia =require ('./pandemia.js');
//llama los datos que creeamos en pandemia
appServer.get('/pandemia', (req, res)=>{
    res.send(pandemia);
});
appServer.post('/addpandemia', (req, res)=>{
    console.log(req.body);
    var pandemia ={};
    pandemia.id = req.body.id;
    pandemia.nombre = req.body.nombre;
    pandemia.sintommas = req.body.sintommas;
    pandemia.recomendaciones = req.body.recomendaciones;
    pandemia.encurso = req.body.encurso;
    pandemia.pais = req.body.pais;
    pandemias.push(pandemia);
    res.send('Pandemia agregado');
});

appServer.get("/pandemias", (req,res)=>{
    res.send(pandemias);
});

