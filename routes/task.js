
/*PASO 4: Rutas y endpoints
Por último crearemos las rutas y en ellas los diferentes endpoints(CRUD).
Para ello creamos la carpeta routes y en ella el archivo task.js que hiremos completando con los diferentes endpoints

- POST /create: Endpoint para crear una tarea.
- GET /: Endpoint para traer todas las tareas.
- GET /id/:_id: Endpoint para buscar tarea por id.
- PUT /markAsCompleted/:_id: Endpoint para marcar una tarea como completada.
- PUT /id/:_id: Endpoint para actualizar una tarea y que solo se pueda cambiar el título de la tarea. Es decir, que no me deje cambiar el campo  “completed” desde este endpoint, sino solo, el título.
- DELETE /id/:_id: Endpoint para eliminar una tarea.
*/

const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js")//IMPORTANTE el nombre de MODELS Siempre va la primer letra en MAYÚSCULAS!

//CREAR TAREA-OK POSTMAN
router.post("/create", async(req, res) => {
    try {
        const createTask = await Task.create(req.body);    
        res
            .status(201)
            .send(createTask);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to create a task" });
    }
});

//TRAER TODAS LAS TAREAS-OK POSTMAN
router.get("/", async(req, res) => {
    try {
        const findTask = await Task.find();
        res
            .status(201)
            .send(findTask);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get a task" });
    }
});

//TRAER UNA TAREA POR ID****ERROR****
router.get("/id/:_id", async(req, res) => {
    console.log("LO QUE ME TRAE req.params._id ES", req.params._id)
    try {
        const id=req.params._id;
        const findTaskbyId = await Task.findById({id});
        console.log("LO QUE ME TRAE findTaskbyId ES:",findTaskbyId)
        res
            .status(201)
            .send(findTaskbyId);
    } catch (error) {
        console.error("el error es:",error);
        res
            .status(500)
            .send({ message: "There was a problem trying to get a task" });
    }
});

//MARCAR TAREA COMO COMPLETADA-OK POSTMAN
router.put("/markAsCompleted/:_id", async(req, res) => {
    try {
        const id=req.params._id;
        const taskCompleted = await Task.updateOne({id});
        res
            .status(201)
            .send(taskCompleted);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to mark as completed" });
    }
});


//MODIFICAR TITULO -OK POSTMAN
router.put("/id/:_id", async(req, res) => {
    try {
        const id=req.params._id;
        const updateTitle = await Task.updateOne({id});
        res
            .status(201)
            .send(updateTitle);
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to update a title" });
    }
});


//ELIMINAR TAREA-OK POSTMAN
router.delete("/id/:_id", async(req, res) => {
    try {
        const id=req.params._id;
        const deleteTask = await Task.deleteOne({id});
        console.log(deleteTask)
        res
            .status(201)
            .send({ message: `The task was deleted` });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .send({ message: "There was a problem trying to delete a task" });
    }
});


module.exports = router;
