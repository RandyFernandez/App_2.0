const {Sequelize} =require ('sequelize');
const database=new Sequelize('películas','root','$HaydeePalomino080750&#',{
    host:'localhost',
    dialect: 'mysql'
});

module.exports.database=database;
/*
try {
database.authenticate();
console.log("Conectado");

}catch(error){
    console.log("Algo está mal, revisemos")
}
*/
//const sequelize =require ('sequelize');
//const database=new sequelize.Sequelize();
