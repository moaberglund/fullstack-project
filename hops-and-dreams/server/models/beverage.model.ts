import { defineMongooseModel } from '#nuxt/mongoose'

export const Beverage = defineMongooseModel('Beverage', {
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    producer: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    volume: {
        type: Number,
        required: true,
    },
    alcohol_by_volume: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    organic: {
        type: Boolean,
        required: true,
    },
    vegan: {
        type: Boolean,
        required: true,
    },
    shelf_amount: {
        type: Number,
        required: true,
    },
    shelf_id: {
        type: Number,
        required: true,
    },
}, {

}, (schema) => {

})
