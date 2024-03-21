import {Schema, model} from "mongoose";

export interface IUser {
    name: string,
    address: string,
    contact: string
    location: {lat:number, lng: number}
}

const userSchema = new Schema<IUser>({
    name:{type:String, required: true},
    address: {type:String, required: true},
    contact: {type: String, required: true},
    location: {type: Schema.Types.Mixed},
   
}, {timestamps: true})


const UserModel = model<IUser>("User", userSchema)

export default UserModel