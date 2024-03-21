import { Response, Request, NextFunction } from "express"
import { AnyZodObject } from "zod"
const validate = (schema: AnyZodObject)=> (req:Request, res: Response, next:NextFunction)=>{
    try {
        schema.parse({
            body: req.body,
        });

        next();
    } catch (e:any) {
        return res.status(400).send({message: "Complete all the required field"})
    }
}

export default validate