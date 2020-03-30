const express = require ('express');
const appServer = express();
appServer.use(express.json());


/*
/Wilson Enrique Sanchez Monroy 
*/

var virus  = [];
appServer.listen (3000, ()=>{
    console.log('Servidor incializado puerto 3000');
   });
   


// El motodo que añade una pandemia

appServer.post('/add' , (req, res)=>{
    console.log('anadir registro');   
    var panOb = new Object();
    panOb.pandemia =  req.body;
    virus.push(panOb);
    console.log(virus[virus.length - 1]);  
    res.send ('POST USUARIO AGRGADO');
   });

   
// El metodo para modificar un id Pandemia

appServer.post ('/set/:id',
(req, res) => {
    for (var i = 0; i <virus.length ; i++){
        var row = virus[i];
        var row2 = row.pandemia;
        var jso = req.params;
        if (row2.id.localeCompare(jso.id) == 0){
            console.log('resultado a modificar post '+jso.id);
            var panOb = new Object();
            panOb.pandemia =  req.body;
            virus[i] = (panOb);  
            console.log('resultado a modificado ');
            console.log(virus[i]);
        }else{
           //console.log('no se encontro el ID');
        }
    }
    res.send ("se envio a modificar");   
} );  

//Metodo para consultar paises de un id

appServer.get ('/getpais/:id',
(req, res) => {
    for (var i = 0; i <virus.length ; i++){
        var row = virus[i];
        var row2 = row.pandemia;
        var jso = req.params;
        if (row2.id.localeCompare(jso.id) == 0){
            console.log('resultado get paises'+jso.id);
            var rowsT = row2.paises;
            console.log('resultado get ');
            var paises = "";
            for (var j = 0; j < rowsT.length ; j++){      
                console.log(rowsT[j]);
                paises = paises + rowsT[j].pais + ","+ rowsT[j].cantInf +","+ rowsT[j].cantMue + ","+ rowsT[j].cantRec+"\n";
            }   
               
        }

    }
    res.send (paises);   
} );  

//Metodo  que consulta la  informacion de la pandemia de un id

  appServer.get ('/getenf/:id',
  (req, res) => {
      for (var i = 0; i <virus.length ; i++){
          var row = virus[i];
          var row2 = row.pandemia;
          var jso = req.params;
          if (row2.id.localeCompare(jso.id) == 0){
              console.log('resultado get paises'+jso.id);
              var rowsT = row2.paises;
              console.log('resultado get ');
              var paises = "";
              var sum1 = 0;
              var sum2 = 0;
              var sum3 = 0;
              for (var j = 0; j < rowsT.length ; j++){      
                sum1 =  parseInt(sum1) +   parseInt(rowsT[j].cantInf);
                sum2 =  parseInt(sum2) +  parseInt(rowsT[j].cantMue);
                sum3 =  parseInt(sum3) +  parseInt(rowsT[j].cantRec);
        
              }   
              
              paises = 
              "id pandemia:" + row2.id +"\n"+
             "nombre:" + row2.nombre +"\n"+
             "Sintomas:" + row2.Sintomas +"\n"+
             "Recomendaciones:"+ row2.Recomendaciones +"\n"+
             "esta en Curso:" + row2.Curso +"\n"+
              "cantidad paises: "+ rowsT.length +"\n" +
              "cantidad infectados: "+ sum1 +"\n"+
              "cantidad muertos: "+sum2 +"\n"+
              "cantidad recuperados: "+sum3 +"\n";
              
              
                
          }
  
      }
      res.send (paises);   
  
  } );  

    
   // curar un id,pais Pandemia

   appServer.get ('/curar/:id,:pais',
   (req, res) => {
       for (var i = 0; i <virus.length ; i++){
           var row = virus[i];
           var row2 = row.pandemia;
           var jso = req.params;
           var dos = jso.pais;
           if (row2.id.localeCompare(jso.id) == 0){
              
               var rowsT = row2.paises;
               console.log('resultado curar ');
              
               var sum1 = 0;
               var sum2 = 0;
               var sum3 = 0;
               for (var j = 0; j < rowsT.length ; j++){   
                 var row3 = rowsT[j];
                 if (row3.pais.localeCompare(jso.pais) == 0){                 
                    
                    rowsT[j].cantRec = parseInt(rowsT[j].cantRec) +  parseInt(rowsT[j].cantInf) -  parseInt(rowsT[j].cantMue) ;
                    rowsT[j].cantInf = 0;
                    console.log(rowsT[j].cantRec);
                    sum1 =   rowsT[j].cantInf;
                    sum2 =  rowsT[j].cantMue;
                    sum3 = rowsT[j].cantRec;
                 }
               } 
               row2.paises = rowsT;
               row.pandemia = row2;
               row.Curso = "false";
               virus[i] = row;

               console.log(virus[i] );
 
               paises = 
               "id pandemia:" + row2.id +"\n"+
              "nombre:" + row2.nombre +"\n"+
              "Sintomas:" + row2.Sintomas +"\n"+
              "Recomendaciones:"+ row2.Recomendaciones +"\n"+
              "esta en Curso:" + row.Curso +"\n"+
               "cantidad paises: "+ rowsT.length +"\n" +
               "cantidad infectados: "+ sum1 +"\n"+
               "cantidad muertos: "+sum2 +"\n"+
               "cantidad recuperados: "+sum3 +"\n";
               
               res.send (paises);        
           }
   
       }
   
   } );  


  
