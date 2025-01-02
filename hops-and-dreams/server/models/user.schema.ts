import { defineMongooseModel } from '#nuxt/mongoose';
import bcrypt from 'bcrypt';

export const User = defineMongooseModel('User', {
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
}, {}, (schema) => {
    // Pre-save hook för att hasha lösenord
    schema.pre('save', async function (next) {
        if (!this.isModified('password')) {
            return next(); // Hoppa över om lösenordet inte ändrats
        }

        try {
            const salt = await bcrypt.genSalt(10); // Generera salt
            this.password = await bcrypt.hash(this.password, salt); // Hasha lösenordet
            next();
        } catch (error) {
            next(error); // Hantera eventuella fel
        }
    });
});