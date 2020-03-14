const pandemia = {
    idpan: Number,
    nombre: "",
    sintomas:"",
    recomendaciones:[""],
    encurso:false, 
    pais:[]
}
module.exports.pandemia=pandemia;

var pais = require('./pais.js');
let comprobador=new pais();

function mostrarpais(idpan){
for(var i ; i<=pais.length; i++){
    if(pais.curso==true){
        console.log(pais.nombre);

    }
}
};
console.log(mostrarpais);


