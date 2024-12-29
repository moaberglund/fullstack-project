export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    try {
        const savedUser = await new UserSchema(body).save();
        return {
            statusCode: 201, // Created
            statusMessage: 'User created successfully',
            data: savedUser,
        };
    }
    catch (error) {
        return error
    }
})