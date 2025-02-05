/*PASO 2: Conexión DB
Después creamos la conexión de la base de datos a Mongo Atlas.
Para ello un archivo .env que contiene url con la conexión a Mongo Atlas. 
Después creamos la carpeta config y dentro de ello el archivo config.js con el código que necesitamos para la conexión a la base de datos.
//CONTROLADORES, para ello crearíamos una capeta "CONTROLLERS" y dentro un archivo "controllers.js" ahí vamos a pegar los metodos, de esa manera 
en ruta me quedan las rutas
*/
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async() => {
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Base de datos conectada con éxito");
    } catch (error) {
        console.error(error);
        throw new Error("Error a la hora de iniciar la base de datos");
    }
};

module.exports = {
    dbConnection,
};


