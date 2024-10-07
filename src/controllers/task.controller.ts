import { Request, Response } from "express";
import TaskServices from "../services/task.service";

class TaskControllers {
   static createTask(req:Request,res:Response){
    console.log(req.body)
        const status =  TaskServices.createTask(req.body.task_title,req.body.task_desc,req.body.task_status,req.body.created_at)
        res.send(status)
    }

    static async getAllTasks(req:Request,res:Response){
        const allTasks =  await TaskServices.readAllTasks()
        res.send(allTasks)
    }
}


export default TaskControllers