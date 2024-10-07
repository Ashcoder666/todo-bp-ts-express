import TaskModel from "../models/task.model";

enum Task_Status {
  TODO = "todo",
  STARTED = "started",
  FINISHED = "FINISHED",
}

class TaskServices {
 static createTask(
    task_title: string,
    task_desc: string,
    task_status: Task_Status,
    created_at: Date
  ) {

    console.log(task_title)
    TaskModel.create({
      task_title,
      task_desc,
      task_status,
      created_at,
    });
    return `task created succesfully`
  }

  static readAllTasks(){
    
  }
 
}


export default TaskServices
