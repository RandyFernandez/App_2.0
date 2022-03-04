//Lugar de configuración de nuestro servidor ...

//importamos express
const express=require('express');
const routes=require('../routs/routs');
const {database}=require('../database/db');

//Express: Es una clase configurable como servidor http o https que se vinculaa un requerimiento.
//Nota: Se necesita crear una instancia (objeto).
/*class car{
    constructor (modelo,año){
        this.modelo=modelo;
        this.año=año;
    }
}
let carro1=new car("Toyota",2022);
console.log(typeof(car));
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log(car);
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log(typeof(carro1));
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log(carro1);*/
const server_app=express();//Inicializamos instancia del servidor.
server_app.set('port',process.env.PORT||4000);//verifica un puerto libre o elige el puerto 4000.
//conectarnos a la base de datos
try{
    database.authenticate();
    console.log('Conectado');
    }catch(error){
        console.log('Algo está mal, revisemos')
    };

server_app.listen(server_app.get('port'),()=>{
    console.log('server on port',server_app.get('port'))
})
server_app.use('/movie', routes.inicio);
console.log("Terminado al final");




