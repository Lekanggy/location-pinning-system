import UserModel, { IUser } from "../model/user.model"

export async function createUserService(input:IUser) {
    try {
        return UserModel.create(input)
    } catch (error) {
        throw new Error()
    }
}

export async function findUsers() {
    return UserModel.find({})
}