import express from "express";
import config from 'config'
import connect from './utils/connect'
import Routes from "./routes";



const app = express()
const port = config.get<number>("port")
const routes = new Routes(app)

app.use(express.json())

//All routes
routes.healthCheck();
routes.createUser();
routes.getUsers()

app.listen(port, async()=>{
    await connect()
    console.log("App is running locally on", `localhost://${port}`)
})

