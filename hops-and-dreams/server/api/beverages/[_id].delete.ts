export default defineEventHandler(async (event) => {
    try {
        const deletedBeverage = await BeverageSchema.findOneAndDelete({ _id: event.context.params?._id });
        if (deletedBeverage) {
            return {
                statusCode: 200,
                statusMessage: "Beverage deleted successfully",
                data: deletedBeverage, // Returnera den raderade posten för referens
            };
        } else {
            return {
                statusCode: 404,
                statusMessage: "Beverage not found",
            };
        }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: "Failed to delete beverage",
            data: error instanceof Error ? error.message : String(error),
        });
    }
});
