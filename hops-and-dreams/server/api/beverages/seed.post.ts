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
        },{
            category: "Sour Beer",
            name: "Mango Mango Mango",
            producer: "Dugges Stillwater Artisanal",
            country: "Sweden",
            region: "",
            year: 2024,
            volume: 330,
            alcohol_by_volume: 4.5,
            price: 3.4, // Cirka omvandlat från SEK till EUR
            description: "Very fruity, sour taste with a distinct character of mango, hints of grapefruit, jasmine flowers, biscuits, and lemon. Serve at 6-8°C as an aperitif or social drink.",
            organic: false,
            vegan: true, // Hittade ingen info, antog vegansk
            shelf_amount: 60,
            shelf_id: 31828,
        },
        {
            category: "Bitter",
            name: "Mediterranean Citrus",
            producer: "Purity Spritz",
            country: "Sweden",
            region: "",
            year: 2024,
            volume: 700,
            alcohol_by_volume: 30,
            price: 26.3, // Cirka omvandlat från SEK till EUR
            description: "Spicy, bitter taste with hints of grapefruit, bergamot, and orange peel. Serve at room temperature as a digestif or use as a cocktail ingredient.",
            organic: false,
            vegan: true, // Hittade ingen info, antog vegansk
            shelf_amount: 40,
            shelf_id: 84388,
        },
        {
            category: "Bitter",
            name: "Aperitivo",
            producer: "Select",
            country: "Italy",
            region: "",
            year: 2024,
            volume: 700,
            alcohol_by_volume: 17.5,
            price: 19.4, // Cirka omvandlat från SEK till EUR
            description: "Spicy, sweet, bitter taste with hints of wormwood, juniper, rhubarb, and blood orange. Serve well chilled as an aperitif or use as a cocktail ingredient.",
            organic: false,
            vegan: false, // Hittade ingen info
            shelf_amount: 30,
            shelf_id: 85247,
        },
        {
            category: "Tequila",
            name: "Silver",
            producer: "Patron",
            country: "Mexico",
            region: "Jalisco",
            year: 2024,
            volume: 700,
            alcohol_by_volume: 40,
            price: 45.6, // Cirka omvandlat från SEK till EUR
            description: "Nuanced, fruity, spicy taste with hints of pear, white pepper, citrus, agave, and fresh herbs. Used as a cocktail ingredient.",
            organic: false,
            vegan: true, // Hittade ingen info, antog vegansk
            shelf_amount: 50,
            shelf_id: 87094,
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
