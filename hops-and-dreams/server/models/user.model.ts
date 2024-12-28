import { defineMongooseModel } from '#nuxt/mongoose'

export const UserSchema = defineMongooseModel('User', {
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
  
}, {

}, (schema) => {

})
