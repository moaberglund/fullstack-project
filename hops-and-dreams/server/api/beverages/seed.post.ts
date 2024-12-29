// server/api/beverages/seed.post.ts
import { BeverageSchema } from '~/server/models/beverage.schema';

export default defineEventHandler(async () => {
    const seedData = [
        {
            category: "White Wine",
            name: "Chardonnay",
            producer: "Vineyard ABC",
            country: "France",
            region: "Burgundy",
            year: 2020,
            volume: 750,
            alcohol_by_volume: 12.5,
            price: 15,
            description: "A crisp white wine with notes of citrus and oak.",
            organic: true,
            vegan: true,
            shelf_amount: 50,
            shelf_id: 1,
        },
        {
            category: "Red Wine",
            name: "Pinot Noir",
            producer: "Vineyard XYZ",
            country: "USA",
            region: "California",
            year: 2018,
            volume: 750,
            alcohol_by_volume: 13.5,
            price: 200,
            description: "Smooth and full-bodied red wine.",
            organic: false,
            vegan: true,
            shelf_amount: 30,
            shelf_id: 5,
        },
        {
            category: "Beer",
            name: "Pale Ale",
            producer: "Craft Breweries",
            country: "USA",
            region: "California",
            year: 2023,
            volume: 330,
            alcohol_by_volume: 5.5,
            price: 2.5,
            description: "A hoppy and refreshing beer.",
            organic: false,
            vegan: true,
            shelf_amount: 100,
            shelf_id: 2,
        },
        // Add more posts
    ];

    try {
        // Empty database before adding new data
        await BeverageSchema.deleteMany({});
        console.log('Existing data cleared.');

        // Add new data
        await BeverageSchema.insertMany(seedData);
        console.log('Seed data successfully inserted.');

        return { message: 'Database seeded successfully' };
    } catch (error) {
        console.error('Error seeding database:', error);
        throw createError({
            statusCode: 500,
            message: 'Failed to seed database',
        });
    }
});
