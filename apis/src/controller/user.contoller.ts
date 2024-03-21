import { Request, Response } from "express";
import {  createUserService, findUsers } from "../service/user.service";


export async function createUserHandler(req:Request, res: Response){
    console.log("", req.body)
    const user = await createUserService(req.body)

    return res.status(200).send({massage: "User created successfully", data: user})
}

export async function getUsersHandler(req: Request, res: Response) {

    const users = await findUsers();

    return res.status(200).send({massage: "All users fetch successfully", data: users})
}