import { BeverageSchema } from "../../models/beverage.schema";

export default defineEventHandler(async () => {
    const seedData = [
        {
            category: "Wine",
            subcategory: "Red Wine",
            name: "Terre de Mistral Reserve",
            producer: "Terre",
            country: "France",
            region: "Rhône Valley",
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
            category: "Wine",
            subcategory: "Red Wine",
            name: "Nor'wester Pinot Noir",
            producer: "Greystone Wines",
            country: "New Zealand",
            region: "Canterbury",
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
            category: "Wine",
            subcategory: "Red Wine",
            name: "Rosso di Montepulciano Organic",
            producer: "Lunadoro",
            country: "Italy",
            region: "Tuscany",
            year: 2023,
            volume: 750,
            alcohol_by_volume: 14.0,
            price: 9.9,
            description: "Spicy taste with hints of oak, cherries, dried apricots, herbs, orange peel, and nougat. Serve at 16-18°C with lamb or beef dishes.",
            organic: true,
            vegan: false,
            shelf_amount: 50,
            shelf_id: 20112
        },
        {
            category: "Wine",
            subcategory: "Red Wine",
            name: "Monastrell",
            producer: "Parajes del Valle",
            country: "Spain",
            region: "Murcia",
            year: 2022,
            volume: 750,
            alcohol_by_volume: 13.0,
            price: 10.9,
            description: "Berry flavor with hints of raspberries, fresh herbs, blueberries, strawberries, and violets. Serve at 14-16°C with fried fish or light meat dishes, preferably tapas and cold cuts.",
            organic: true,
            vegan: true,
            shelf_amount: 50,
            shelf_id: 2532
        },
        {
            category: "Wine",
            subcategory: "Red Wine",
            name: "Bobal",
            producer: "Corazón Verde",
            country: "Spain",
            region: "Castilla-La Mancha",
            year: 2022,
            volume: 750,
            alcohol_by_volume: 13.0,
            price: 8.9,
            description: "Fruity flavor with hints of wild raspberries, fresh herbs, blueberries, cherries, and licorice. Serve at around 16°C with vegetarian dishes or light meat dishes.",
            organic: true,
            vegan: true,
            shelf_amount: 50,
            shelf_id: 20074
        },
        {
            category: "Wine",
            subcategory: "White Wine",
            name: "Grüner Veltliner Organic",
            producer: "Bergh",
            country: "Austria",
            region: "Niederösterreich",
            year: 2023,
            volume: 750,
            alcohol_by_volume: 12.5,
            price: 10.9,
            description: "Fruity flavor with hints of yellow pears, green apples, white pepper, cantaloupe, herbs, and mandarin. Serve at 8-10°C with dishes of fish, light meat, or vegetarian meals.",
            organic: true,
            vegan: true,
            shelf_amount: 50,
            shelf_id: 74234
        },
        {
            category: "Wine",
            subcategory: "White Wine",
            name: "Verdejo Organic",
            producer: "Girasol",
            country: "Spain",
            region: "Castilla-La Mancha",
            year: 2023,
            volume: 750,
            alcohol_by_volume: 13,
            price: 7.9,
            description: "Fruity, youthful, very fresh flavor with hints of pear, honeydew melon, herbs, gooseberries, and citrus peel. Serve at 8-10°C with dishes of fish or seafood, preferably salads.",
            organic: true,
            vegan: false,
            shelf_amount: 50,
            shelf_id: 22349
        },

        {
            category: "Wine",
            subcategory: "White Wine",
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
            category: "Wine",
            subcategory: "White Wine",
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
            subcategory: "Ale",
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
        {
            category: "Beer",
            subcategory: "Ale",
            name: "Apocalyptic Thunder Juice NEIPA",
            producer: "Amundsen",
            country: "Norway",
            region: "N/A",
            year: 2025,
            volume: 330,
            alcohol_by_volume: 6.5,
            price: 2.9,
            description: "Fruity, hop-aromatic taste with a clear bitterness, hints of pineapple, fresh herbs, mango, and grapefruit. Serve at 8-10°C as a social drink, with flavorful vegetarian dishes or light meat dishes.",
            organic: false,
            vegan: true,
            shelf_amount: 50,
            shelf_id: 32684
        },
        {
            category: "Beer",
            subcategory: "Ale",
            name: "Scandinavian West Coast IPA",
            producer: "Stigbergets",
            country: "Sweden",
            region: "Västra Götaland",
            year: 2025,
            volume: 330,
            alcohol_by_volume: 6.5,
            price: 3.69,
            description: "Hop-aromatic, fruity taste with a clear bitterness, hints of pineapple, passion fruit, honey, orange, mango, and pine needles. Serve at 10-12°C as a social drink or with flavorful dishes of pork, lamb, or beef, preferably grilled.",
            organic: false,
            vegan: true,
            shelf_amount: 50,
            shelf_id: 1205
        },

        {
            category: "Beer",
            subcategory: "Sour Beer",
            name: "Mango Mango Mango",
            producer: "Dugges Stillwater Artisanal",
            country: "Sweden",
            region: "Dalarna",
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
            category: "Beer",
            subcategory: "Sour Beer",
            name: "Brewski Strawberry Pie",
            producer: "Brewski AB",
            country: "Sweden",
            region: "Skåne",
            year: 2025,
            volume: 330,
            alcohol_by_volume: 4,
            price: 3.79,
            description: "Berry, sour taste with hints of strawberries, raspberries, lemon peel, and vanilla. Serve at 6-8°C as a social drink.",
            organic: false,
            vegan: true,
            shelf_amount: 50,
            shelf_id: 31168
        },
        {
            category: "Beer",
            subcategory: "Sour Beer",
            name: "Living Machines",
            producer: "Elmeleven",
            country: "Sweden",
            region: "Halland",
            year: 2025,
            volume: 330,
            alcohol_by_volume: 6,
            price: 3.79,
            description: "Very fruity, sour taste with hints of passion fruit, mango, and mandarin. Serve at 6-8°C as a social drink.",
            organic: false,
            vegan: true,
            shelf_amount: 50,
            shelf_id: 2409
        },

        {
            category: "Cider",
            subcategory: "Sweet",
            name: "Briska Elderflower",
            producer: "Briska",
            country: "Sweden",
            region: "Skåne",
            year: 2024,
            volume: 330,
            alcohol_by_volume: 4.5,
            price: 15.5,
            description: "Floral, fruity, sweet taste with a distinct character of elderflower, hints of green apples, and lime. Serve at 6-8°C as a social drink or with fruit and berry desserts.",
            organic: false,
            vegan: false,
            shelf_amount: 70,
            shelf_id: 1812,
        },
        {
            category: "Cider",
            subcategory: "Dry",
            name: "Kiviks Ekologisk Äppelcider med smak av Fläderblom",
            producer: "Kiviks",
            country: "Sweden",
            region: "Skåne, Simrishamns Municipality",
            year: 2024,
            volume: 330,
            alcohol_by_volume: 4.5,
            price: 1.7,
            description: "Very fruity, floral taste with sweetness, hints of elderflower, honey, and apples. Serve at 8-10°C as a social drink.",
            organic: true,
            vegan: true,
            shelf_amount: 60,
            shelf_id: 1874,
        },
        {
            category: "Cider",
            subcategory: "Dry",
            name: "Lustgårdens Cider Torr Äpple",
            producer: "Lustgårdens",
            country: "Sweden",
            region: "Halland",
            year: 2024,
            volume: 500,
            alcohol_by_volume: 4.5,
            price: 1.5,
            description: "Fruity taste with a distinct apple character, hints of yellow pears, orange peel, and spices. Serve at 8-10°C as a social drink or with light meat dishes.",
            organic: false,
            vegan: true,
            shelf_amount: 60,
            shelf_id: 1849,
        },
        {
            category: "Cider",
            subcategory: "Dry",
            name: "Cidre Biologique Brut",
            producer: "la Ribaude",
            country: "France",
            region: "Normandy",
            year: 2024,
            volume: 750,
            alcohol_by_volume: 4.5,
            price: 5.4,
            description: "Fruity, nuanced taste with hints of ripe apples, honey, dried apricots, straw, marzipan, and orange marmalade. Serve at 8-10°C as a social drink or with light meat dishes or soft cheeses such as Brie or Camembert.",
            organic: true,
            vegan: true,
            shelf_amount: 60,
            shelf_id: 1803,
        },
        {
            category: "Cider",
            subcategory: "Dry",
            name: "Boulard Cidre Biologique",
            producer: "Boulard",
            country: "France",
            region: "Normandy",
            year: 2024,
            volume: 750,
            alcohol_by_volume: 4.5,
            price: 5.6,
            description: "Fruity taste with a distinct character of dried apples, hints of straw, orange marmalade, marzipan, and spices. Serve at 8-10°C as a social drink or with light meat dishes or soft cheeses like Brie or Camembert.",
            organic: true,
            vegan: true,
            shelf_amount: 60,
            shelf_id: 1848,
        },
        {
            category: "Cider",
            subcategory: "Sweet",
            name: "Briska Äppelcider",
            producer: "Briska",
            country: "Sweden",
            region: "Skåne",
            year: 2024,
            volume: 330,
            alcohol_by_volume: 4.5,
            price: 1.4,
            description: "Sweet, fruity taste with notes of green apples and pears. Serve at 8-10°C as a social drink or with fruit and berry desserts.",
            organic: true,
            vegan: true,
            shelf_amount: 60,
            shelf_id: 13203,
        },
        {
            category: "Cider",
            subcategory: "Sweet",
            name: "Kopparberg Pear Cider",
            producer: "Kopparberg",
            country: "Sweden",
            region: "Västmanland",
            year: 2024,
            volume: 500,
            alcohol_by_volume: 7,
            price: 1.9,
            description: "Fruity, sweet taste with notes of pear and vanilla. Serve at 6-8°C as a social drink or with fruit desserts.",
            organic: false,
            vegan: true,
            shelf_amount: 90,
            shelf_id: 1823,
        },
        {
            category: "Cider",
            subcategory: "Sweet",
            name: "En Svensk Cider Pear",
            producer: "En Svensk Cider",
            country: "Sweden",
            region: "Sverige",
            year: 2024,
            volume: 330,
            alcohol_by_volume: 4.5,
            price: 1.45,
            description: "Fruity, sweet taste with distinct character of pear, hints of honeydew melon and apples. Serve at 6-8°C as a social drink or with fruit or berry desserts.",
            organic: true,
            vegan: true,
            shelf_amount: 40,
            shelf_id: 1817,
        },
        {
            category: "Mixed Drinks",
            subcategory: "Sweet",
            name: "Liquid Industries The Bellini Project",
            producer: "Liquid Industries",
            country: "Sweden",
            region: "Dalarna",
            year: 2024,
            volume: 330,
            alcohol_by_volume: 4.5,
            price: 1.61,
            description: "Very fruity, sweet taste with a distinct character of peach, hints of apples. Serve chilled as a social drink.",
            organic: true,
            vegan: true,
            shelf_amount: 170,
            shelf_id: 1089,
        },

        {
            category: "Mixed Drinks",
            subcategory: "Sweet",
            name: "Ginger Joe Ginger Beer",
            producer: "Ginger Joe",
            country: "United Kingdom",
            region: "England",
            year: 2024,
            volume: 330,
            alcohol_by_volume: 4,
            price: 2.35,
            description: "Spicy, sweet taste with a slight heat and a distinct character of ginger, hints of honey, and bitter orange. Serve at 6-8°C as a social drink, with sushi, or with mildly spiced Asian dishes.",
            organic: false,
            vegan: false,
            shelf_amount: 50,
            shelf_id: 88018,
        },
        {
            category: "Mixed Drinks",
            subcategory: "Sweet",
            name: "Smirnoff Ice",
            producer: "Smirnoff",
            country: "USA",
            region: "Texas",
            year: "2025",
            volume: 275,
            alcohol_by_volume: 4,
            price: 2.9,
            description: "Fruity, sweet taste with a distinct character of lemon. Serve chilled as a social drink.",
            organic: false,
            vegan: true,
            shelf_amount: 83,
            shelf_id: 1731,
        },
        {
            category: "Mixed Drinks",
            subcategory: "Dry",
            name: "KUBIK Hard Seltzer Grapefrukt",
            producer: "KUBIK",
            country: "Sweden",
            region: "Västra Götaland",
            year: 2024,
            volume: 330,
            alcohol_by_volume: 4.5,
            price: 2.6,
            description: "Very fruity taste with a distinct character of grapefruit. Serve at 4-6°C as a social drink.",
            organic: false,
            vegan: false,
            shelf_amount: 60,
            shelf_id: 56799,
        },
        {
            category: "Mixed Drinks",
            subcategory: "Dry",
            name: "SLEEQ Pear Hard Seltzer",
            producer: "SLEEQ",
            country: "Sweden",
            region: "Värmland",
            year: 2025,
            volume: 330,
            alcohol_by_volume: 4.5,
            price: 2.9,
            description: "Fruity taste with hints of pear. Serve chilled as a social drink.",
            organic: false,
            vegan: false,
            shelf_amount: 76,
            shelf_id: 36340,
        },
        {
            category: "Mixed Drinks",
            subcategory: "Dry",
            name: "H2 Tokyo Hard Seltzer",
            producer: "H2 Tokyo",
            country: "Sweden",
            region: "Skåne",
            year: 2025,
            volume: 330,
            alcohol_by_volume: 4.5,
            price: 2.6,
            description: "Floral taste with hints of lychee and citrus. Serve at 6-8°C as a social drink.",
            organic: false,
            vegan: false,
            shelf_amount: 78,
            shelf_id: 30719,
        },
        {
            category: "Non-alcoholic",
            subcategory: "Spirits",
            name: "Non-Alcoholic Snaps",
            producer: "Skåne",
            country: "Sweden",
            region: "Skåne",
            year: 2024,
            volume: 350,
            alcohol_by_volume: 0.5,
            price: 69.0,
            description: "Spicy taste with slight sweetness, hints of caraway, anise, and dill. Serve chilled as a snaps.",
            organic: false,
            vegan: false,
            shelf_amount: 50,
            shelf_id: 1948,
        },

        {
            category: "Spirits",
            subcategory: "Bitter",
            name: "Mediterranean Citrus",
            producer: "Purity Spritz",
            country: "Sweden",
            region: "Dalarna",
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
            category: "Spirits",
            subcategory: "Bitter",
            name: "Aperol",
            producer: "Aperol",
            country: "Italy",
            region: "Venezia",
            year: 2025,
            volume: 700,
            alcohol_by_volume: 11,
            price: 22,
            description: "Spicy, sweet, slightly bitter taste with a distinct character of orange, hints of rhubarb, and herbs. Used as a drink ingredient.",
            organic: false,
            vegan: false,
            shelf_amount: 298,
            shelf_id: 729,
        },
        {
            category: "Spirits",
            subcategory: "Bitter",
            name: "Aperitivo Select",
            producer: "Select",
            country: "Italy",
            region: "Lombardy",
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
            category: "Spirits",
            subcategory: "Tequila",
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
            category: "Spirits",
            subcategory: "Tequila",
            name: "1800 Añejo",
            producer: "1800",
            country: "Mexico",
            region: "Jalisco",
            year: 2020,
            volume: 700,
            alcohol_by_volume: 38,
            price: 45.8,
            description: "Complex, spicy taste with a distinct barrel character, hints of dried apples, sandalwood, vanilla, agave, straw, cocoa, tobacco, dried apricots, cinnamon, and bitter orange. Serve at room temperature as an après-dinner drink.",
            organic: false,
            vegan: false,
            shelf_amount: 41,
            shelf_id: 11525,
        },
        {
            category: "Spirits",
            subcategory: "Tequila",
            name: "Nocheluna Sotol",
            producer: "Nocheluna",
            country: "Mexico",
            region: "Jalisco",
            year: 2023, // Default as no specific year is mentioned
            volume: 700,
            alcohol_by_volume: 43,
            price: 77.2,
            description: "This product is an order item with longer delivery time. Available at the supplier but not at Systembolaget. It has not been tested by Systembolaget, so no taste description is available.",
            organic: false,
            vegan: false,
            shelf_amount: 110,
            shelf_id: 59821,
        },

        {
            category: "Spirits",
            subcategory: "Vodka",
            name: "Koskenkorva Vodka",
            producer: "Koskenkorva",
            country: "Finland",
            region: "Etela-Pohjanmaa",
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
            category: "Spirits",
            subcategory: "Vodka",
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
        },
        {
            category: "Spirits",
            subcategory: "Vodka",
            name: "Grey Goose Vodka",
            producer: "Grey Goose",
            country: "France",
            region: "Normandie",
            year: 2024,
            volume: 700,
            alcohol_by_volume: 40,
            price: 54.9,
            description: "Clean taste with hints of citrus and herbs. Used as a cocktail ingredient.",
            organic: false,
            vegan: false,
            shelf_amount: 78,
            shelf_id: 81899,
        },
        {
            category: "Non-alcoholic",
            subcategory: "Wine",
            name: "Viva La Vida Sparkling",
            producer: "Viva Wines",
            country: "Spain",
            region: "Catalonia",
            year: 2022,
            volume: 750,
            alcohol_by_volume: 0.0,
            price: 12.50,
            description: "A crisp sparkling wine with fresh notes of green apple and citrus, balanced with a hint of floral undertones. Serve chilled with seafood or light appetizers.",
            organic: true,
            vegan: true,
            shelf_amount: 85,
            shelf_id: 4821
        },
        {
            category: "Non-alcoholic",
            subcategory: "Beer",
            name: "HopAway IPA",
            producer: "Brewster Brewery",
            country: "Germany",
            region: "Bavaria",
            year: 2021,
            volume: 500,
            alcohol_by_volume: 0.0,
            price: 3.95,
            description: "A hoppy and refreshing IPA with aromas of pine, citrus, and a smooth malty backbone. Perfect for enjoying on a sunny afternoon.",
            organic: false,
            vegan: true,
            shelf_amount: 120,
            shelf_id: 8317
        },
        {
            category: "Non-alcoholic",
            subcategory: "Cider",
            name: "Golden Orchard Cider",
            producer: "Green Apple Cider Co.",
            country: "England",
            region: "Somerset",
            year: 2020,
            volume: 330,
            alcohol_by_volume: 0.0,
            price: 2.75,
            description: "A light and crisp cider with a blend of sweet and tart apple flavors, offering a refreshing drink that pairs well with casual meals.",
            organic: true,
            vegan: true,
            shelf_amount: 150,
            shelf_id: 4261
        },
        {
            category: "Non-alcoholic",
            subcategory: "Mixed Drinks",
            name: "Tropical Breeze",
            producer: "TropiMix",
            country: "USA",
            region: "California",
            year: 2022,
            volume: 250,
            alcohol_by_volume: 0.0,
            price: 4.50,
            description: "A vibrant blend of tropical fruits like mango, pineapple, and passion fruit, with a refreshing splash of lime. Perfect for a summer day.",
            organic: true,
            vegan: true,
            shelf_amount: 95,
            shelf_id: 7134
        },
        {
            category: "Non-alcoholic",
            subcategory: "Spirits",
            name: "Zero Gin",
            producer: "Pure Spirit Distillery",
            country: "Scotland",
            region: "Edinburgh",
            year: 2023,
            volume: 700,
            alcohol_by_volume: 0.0,
            price: 22.99,
            description: "A non-alcoholic gin with the aromatic notes of juniper, citrus, and a mix of botanicals, perfect for gin lovers seeking a zero-alcohol option.",
            organic: false,
            vegan: true,
            shelf_amount: 60,
            shelf_id: 1275
        },
        {
            category: "Non-alcoholic",
            subcategory: "Wine",
            name: "Grape Garden Shiraz",
            producer: "Grape Garden Winery",
            country: "Australia",
            region: "Barossa Valley",
            year: 2021,
            volume: 750,
            alcohol_by_volume: 0.0,
            price: 14.99,
            description: "A rich and full-bodied red wine with notes of ripe berries, dark chocolate, and spices, offering a velvety smooth finish.",
            organic: true,
            vegan: true,
            shelf_amount: 110,
            shelf_id: 4928
        },
        {
            category: "Non-alcoholic",
            subcategory: "Beer",
            name: "Citrus Hops Lager",
            producer: "Summit Brewing",
            country: "USA",
            region: "Colorado",
            year: 2021,
            volume: 330,
            alcohol_by_volume: 0.0,
            price: 3.50,
            description: "A light and zesty lager with citrusy hop notes and a crisp, clean finish. A refreshing choice for beer lovers who prefer a non-alcoholic option.",
            organic: true,
            vegan: true,
            shelf_amount: 145,
            shelf_id: 2854
        },
        {
            category: "Non-alcoholic",
            subcategory: "Cider",
            name: "Apple Orchard Sparkler",
            producer: "Sparkling Orchard",
            country: "Ireland",
            region: "County Cork",
            year: 2020,
            volume: 500,
            alcohol_by_volume: 0.0,
            price: 4.20,
            description: "A sparkling cider made from a blend of Irish apples, offering a perfect balance of sweet and tart flavors with a crisp finish.",
            organic: false,
            vegan: true,
            shelf_amount: 80,
            shelf_id: 6359
        },
        {
            category: "Non-alcoholic",
            subcategory: "Mixed Drinks",
            name: "Berry Fusion",
            producer: "Fusion Beverages",
            country: "Canada",
            region: "Ontario",
            year: 2022,
            volume: 330,
            alcohol_by_volume: 0.0,
            price: 3.00,
            description: "A sweet and tangy blend of mixed berries, including blueberry, raspberry, and strawberry, with a hint of mint for added refreshment.",
            organic: true,
            vegan: true,
            shelf_amount: 100,
            shelf_id: 2984
        },
        {
            category: "Non-alcoholic",
            subcategory: "Spirits",
            name: "Mocktail Vodka",
            producer: "Mocktail Distillers",
            country: "Sweden",
            region: "Stockholm",
            year: 2023,
            volume: 700,
            alcohol_by_volume: 0.0,
            price: 24.99,
            description: "A non-alcoholic spirit with the smooth flavor of vodka and a mix of refreshing citrus and herbal notes, ideal for mocktail creations.",
            organic: true,
            vegan: true,
            shelf_amount: 55,
            shelf_id: 5603
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
