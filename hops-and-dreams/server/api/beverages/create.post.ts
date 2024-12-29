export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const savedBeverage = await new BeverageSchema(body).save();
        return {
            statusCode: 201, // Created
            statusMessage: 'Beverage created successfully',
            data: savedBeverage,
        };
    }
    catch (error) {
        return error
    }
})