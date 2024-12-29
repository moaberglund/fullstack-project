export default defineEventHandler(async (event) => {
    try {
        const deletedUser = await UserSchema.findOneAndDelete({ _id: event.context.params?._id });
        if (deletedUser) {
            return {
                statusCode: 200,
                statusMessage: "User deleted successfully",
                data: deletedUser, // Returnera den raderade posten för referens
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
            statusMessage: "Failed to delete user",
            data: error instanceof Error ? error.message : String(error),
        });
    }
});
