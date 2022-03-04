//Tenemos que definir 1 modelo porque solo hay una entidad
//Se tiene que definir tantos modelos como entidades existan más sus relaciones n a n. (En algunos casos).

const {Sequelize,DataTypes}=require('sequelize');
const {database}=require('../database/db');

//console.log(database);

//generar una instancia del modelo
const ModeloPelicula=database.define('Películas',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING}
}
);
//console.log(ModeloPelicula);
//console.log(typeof(ModeloPelicula));
module.exports.ModeloPelicula=ModeloPelicula;
