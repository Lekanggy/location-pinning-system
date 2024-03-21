import { Express, Request, Response } from "express";
import validate from "./middleware/validate";
import { customerSchema } from "./schema/user.schema";
import { createUserHandler, getUsersHandler } from "./controller/user.contoller";


interface RoutesInterface{
   
    healthCheck: ()=> Express
}
export default class Routes implements RoutesInterface{
    private app;
     constructor(param:Express){
         this.app = param
     }
 
     healthCheck(){
         return this.app.get('/api/healthcheck', 
             (req:Request, res:Response)=> res.status(200).send({message: "App is running properly"})
         )
     }

     createUser(){
        return this.app.post("/api/users", validate(customerSchema), createUserHandler)
     }

     getUsers(){
        return this.app.get("/api/users", getUsersHandler)
     }
 }
 