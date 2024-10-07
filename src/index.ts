import express,{ Express,Request,Response } from "express";
import cors from "cors"
import morgan from "morgan";
import helmet from "helmet";
import connectDatabase from "./config/database";
import Router from "./routes/task.route";
const app:Express = express()


app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())
connectDatabase()
app.use(Router)
app.listen(5001,()=>{
    console.log("server started at 5001")
})