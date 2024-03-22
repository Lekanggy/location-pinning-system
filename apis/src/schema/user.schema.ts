import { TypeOf, object, string, number } from "zod";

export const customerSchema = object({
    body:object({
        name: string({required_error: "Name is required"}),
        address: string({required_error: "address is required"}),
        contact: string({required_error: "contact is required"}),
        pos: object({
            lat: number({required_error: "Latitude is required"}),
            lng: number({required_error: "Longitude is required"})
        })
    })
})