import { defineMongooseModel } from '#nuxt/mongoose';
import bcrypt from 'bcrypt';

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
}, {}, (schema) => {
    // Pre-save hook för att hasha lösenord
    schema.pre('save', async function (next) {
        const user = this as any; // Tvinga typ till `any` för att undvika typfel
        if (!user.isModified('password')) {
            return next(); // Hoppa över om lösenordet inte ändrats
        }
    
        try {
            const salt = await bcrypt.genSalt(10); // Generera salt
            user.password = await bcrypt.hash(user.password, salt); // Hasha lösenordet
            next();
        } catch (error) {
            if (error instanceof Error) {
                return next(error); 
            } else {
                return next(new Error('An unknown error occurred during password hashing.'));
            }
        }
    });
}); 
