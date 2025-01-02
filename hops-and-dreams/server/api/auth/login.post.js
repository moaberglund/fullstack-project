import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from '~/server/models/user.schema'; // Importera din schema-modell

const JWT_SECRET = process.env.JWT_SECRET; 

export default defineEventHandler(async (event) => {
    const { username, password } = await readBody(event);

    try {
        // Hitta användaren i databasen
        const user = await UserSchema.findOne({ username });

        if (!user) {
            return { statusCode: 401, body: { success: false, message: 'Invalid username or password' } };
        }

        // Kontrollera om lösenordet är korrekt
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return { statusCode: 401, body: { success: false, message: 'Invalid username or password' } };
        }

        // Skapa en JWT-token
        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '12h' } // Token går ut om 12 timmar
        );

        // Returnera token till frontend
        return {
            statusCode: 200,
            body: {
                success: true,
                message: 'Login successful',
                token
            }
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: { success: false, message: 'Internal server error', error: error.message }
        };
    }
});
