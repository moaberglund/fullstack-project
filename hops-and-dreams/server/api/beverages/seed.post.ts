import { BeverageSchema } from "../../models/beverage.schema";

export default defineEventHandler(async () => {
    const seedData = [
        {
            category: "Red Wine",
            name: "Terre de Mistral Reserve",
            producer: "",
            country: "France",
            region: "Rhône Valley, Côtes du Rhône",
            year: 2023,
            volume: 750,
            alcohol_by_volume: 14.5,
            price: 9.0,
            description: "Spicy flavor with notes of blackberries, wild raspberries, black pepper, licorice, violets, and bay leaf. Serve at 16-18°C with lamb or beef dishes.",
            organic: true,
            vegan: false,
            shelf_amount: 50,
            shelf_id: 2167
        },
        {
            category: "Red Wine",
            name: "Nor'wester Pinot Noir",
            producer: "Greystone Wines",
            country: "New Zealand",
            region: "Canterbury, North Canterbury",
            year: 2023,
            volume: 750,
            alcohol_by_volume: 13.5,
            price: 18.0,
            description: "Nuanced, spicy aroma with barrel character, notes of sandalwood, strawberries, roasted nuts, minerals, raspberries, blood orange, and cocoa. Serve at about 16°C with vegetarian dishes or light meat dishes, or with mildly seasoned lamb dishes.",
            organic: false,
            vegan: false,
            shelf_amount: 40,
            shelf_id: 2774
        },
        {
            category: "White Wine",
            name: "Stoneleigh Sauvignon Blanc",
            producer: "Stoneleigh",
            country: "New Zealand",
            region: "Marlborough",
            year: 2023,
            volume: 750,
            alcohol_by_volume: 13,
            price: 11.0,
            description: "Aromatic, youthful, very fresh taste with notes of passion fruit, blackcurrant leaves, pear, and lime. Serve at 8-10°C with fish or seafood dishes, preferably salads.",
            organic: false,
            vegan: true,
            shelf_amount: 60,
            shelf_id: 6311
        },
        {
            category: "White Wine",
            name: "Soave Classico",
            producer: "Pieropan",
            country: "Italy",
            region: "Veneto, Soave Classico",
            year: 2023,
            volume: 750,
            alcohol_by_volume: 12,
            price: 13.4,
            description: "Fruity taste with notes of yellow pears, herbs, minerals, tangerine, and apples. Serve at 8-10°C with vegetarian dishes or fish and seafood dishes.",
            organic: false,
            vegan: true,
            shelf_amount: 50,
            shelf_id: 20108
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
            price: 3.4, 
            description: "Very fruity, sour taste with a distinct character of mango, hints of grapefruit, jasmine flowers, biscuits, and lemon. Serve at 6-8°C as an aperitif or social drink.",
            organic: false,
            vegan: true, 
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
            price: 26.3, 
            description: "Spicy, bitter taste with hints of grapefruit, bergamot, and orange peel. Serve at room temperature as a digestif or use as a cocktail ingredient.",
            organic: false,
            vegan: true, 
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
            price: 19.4, 
            description: "Spicy, sweet, bitter taste with hints of wormwood, juniper, rhubarb, and blood orange. Serve well chilled as an aperitif or use as a cocktail ingredient.",
            organic: false,
            vegan: false, 
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
            price: 45.6,
            description: "Nuanced, fruity, spicy taste with hints of pear, white pepper, citrus, agave, and fresh herbs. Used as a cocktail ingredient.",
            organic: false,
            vegan: true, 
            shelf_amount: 50,
            shelf_id: 87094,
        },
        {
            category: "Vodka & Unflavored Spirits",
            name: "Koskenkorva Vodka",
            producer: "",
            country: "Finland",
            region: "",
            year: 2024,
            volume: 350,
            alcohol_by_volume: 37.5,
            price: 11.5,
            description: "Clean taste with notes of bread and a hint of straw. Serve chilled as a schnapps or use as a cocktail ingredient.",
            organic: false,
            vegan: true,
            shelf_amount: 100,
            shelf_id: 167
        },
        {
            category: "Vodka & Unflavored Spirits",
            name: "Absolut Vodka",
            producer: "Absolut",
            country: "Sweden",
            region: "Skåne, Kristianstad Municipality",
            year: 2024,
            volume: 350,
            alcohol_by_volume: 40,
            price: 12.0,
            description: "Clean taste with notes of light bread and citrus. Serve chilled as a schnapps or use as a cocktail ingredient.",
            organic: false,
            vegan: true,
            shelf_amount: 100,
            shelf_id: 88
        }
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
