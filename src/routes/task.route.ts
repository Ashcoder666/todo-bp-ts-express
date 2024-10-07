import express from 'express'
import TaskControllers from '../controllers/task.controller'


const Router= express.Router()

Router.post("/task",TaskControllers.createTask)

export default Router