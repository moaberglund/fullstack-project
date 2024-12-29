export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const updatedBeverage = await BeverageSchema.findOneAndUpdate(
            { _id: event.context.params?._id },
            body,
            { new: true } // Returnera det uppdaterade dokumentet
        );

        if (updatedBeverage) {
            return {
                statusCode: 200,
                statusMessage: "Beverage updated successfully",
                data: updatedBeverage,
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
            statusMessage: "Failed to update beverage",
            data: error instanceof Error ? error.message : String(error),
        });
    }
});
