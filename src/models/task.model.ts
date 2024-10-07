import mongoose,{Document, Schema} from "mongoose";

enum Task_Status {
    TODO = "todo",
    STARTED = "started",
    FINISHED = "FINISHED"
}

interface Itask extends Document {
    task_title:string;
    task_desc:string;
    task_status:Task_Status;
    created_at : Date;
}

const TaskSchema: Schema<Itask> = new Schema<Itask>({
    task_title:{
        type:String,
        required:true
    },
    task_desc:{
        type:String,
        required:true
    },
    task_status:{
        type:String,
        enum:Object.values(Task_Status),
        required:true
    },
    created_at :{
        type:Date,
        default:Date.now(),
        required:true
    }
})

const TaskModel = mongoose.model<Itask>(
    "tasks",
    TaskSchema
)

export default TaskModel