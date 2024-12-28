import { BeverageSchema } from "~/server/models/beverage.schema"

export default defineEventHandler(async (event) => {
    try {
        return await BeverageSchema.find({})
    }
    catch (error) {
        return error
    }
})