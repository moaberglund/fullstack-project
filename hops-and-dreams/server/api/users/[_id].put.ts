export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const updatedUser = await UserSchema.findOneAndUpdate(
            { _id: event.context.params?._id },
            body,
            { new: true } // Returnera det uppdaterade dokumentet
        );

        if (updatedUser) {
            return {
                statusCode: 200,
                statusMessage: "User updated successfully",
                data: updatedUser,
            };
        } else {
            return {
                statusCode: 404,
                statusMessage: "User not found",
            };
        }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to update user",
            data: error instanceof Error ? error.message : String(error),
        });
    }
});
