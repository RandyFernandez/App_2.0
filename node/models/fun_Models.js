const {ModeloPelicula}=require('./models');
//Función para mostrar todas las instancias

const getAllMovies=async(req,res)=>{
    try{
        const Peliculas=await ModeloPelicula.findAll()
    }catch(error){
        res.json({message: 'No se encontraron instancias'})
    }
}

//Función para mostrar 1 instancia
const getOneMovie=async(req,res)=>{
    try{
        const Pelicula_unica=await ModeloPelicula.findALL({where:{id: req.params.id}});
        res.json(Pelicula_unica);
    }catch(error){
        res.json({message: "No se encontró la instancia"})
    }
}

//Función para crear un registro
//sql: insert into table ....{'300',....}
const createOneMovie=async(req,res)=>{
    try{
        await ModeloPelicula.create(req.body);
        res.jason({message: "Registro creado satisfactoriamente"});
    }catch(error){
        res.json({message:"No se ha realizado ningún registro"})
    }
}

//Función para actualizar un registro

const updateOneMovie=async(req,res)=>{
    try{
        await ModeloPelicula.update(req.body({where: {id: req.params.id}
        }));
    res.json({message: "Registro actualizado"});
    }catch (error){
        res.json({message: "No se ha podido actualizar el registro"})
    }
}

//Función para eliminar un registro(=>ModeloPelicula)
const deleteOneMovie=async(req,res)=>{
    try{
        await ModeloPelicula.destroy({where: {id: req.params.id}});
        res.json({message: "Eliminado correctamente"});
    }catch(error){
        res.json({message: "No se pudo eliminar"})
    }
}

module.exports={getAllMovies,getOneMovie,createOneMovie, updateOneMovie, deleteOneMovie}