import { Request, Response } from "express";
import TaskServices from "../services/task.service";

class TaskControllers {
   static createTask(req:Request,res:Response){
    console.log(req.body)
        const status =  TaskServices.createTask(req.body.task_title,req.body.task_desc,req.body.task_status,req.body.created_at)
        res.send(status)
    }
}


export default TaskControllers