// Aqui ira el modelo de la tarea con los campos title, completed y los timestamps.

/*PASO 3: Modelo User
Después creamos el modelo del usuario. Esto permite que podamos realizar operaciones en la base de datos MongoDB 
relacionadas con la colección de usuarios. Para ello creamos una carpeta models y dentro crearemos nuestros modelos.
En este caso creamos un archivo llamado Task.js que contendrá nuestro modelo de User.
De esta forma tendremos una estructura que nos permitirá el uso de operaciones CRUD (Create, Read, Update, Delete) 
que pueden realizarse en la base de datos.*/


const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
}, { timestamps: true });

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;


//IMPORTANTE el nombre de MODELS Siempre va la primer letra en MAYÚSCULAS!



