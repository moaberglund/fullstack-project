# Hops and Dreams - a fullstack project


## API Dokumentation

Vårt API är byggt med [Mongoose](https://mongoosejs.com/) och används för att hantera backend-logik och datahantering i vårt fullstack-projekt. API:t inkluderar hantering av användare och drycker, autentisering, samt CRUD-funktionalitet för alla modeller. 

### Funktioner och Tekniker
- **Mongoose**: För att definiera och interagera med MongoDB-databasen.
- **bcrypt**: Används för att hasha lösenord och säkerställa användarsäkerhet.
- **jsonwebtoken (JWT)**: För att hantera autentisering och token-skyddade endpoints.
- **jwt-decode**: För att avkoda JWT och hantera användarsessioner.

---

### Modeller

#### **Beverage Model**
Hantera information om drycker med följande fält:
- `category` (String, required)
- `subcategory` (String, required)
- `name` (String, required)
- `producer` (String, required)
- `country` (String, required)
- `region` (String, required)
- `year` (Number, required)
- `volume` (Number, required)
- `alcohol_by_volume` (Number, required)
- `price` (Number, required)
- `description` (String, required)
- `organic` (Boolean, required)
- `vegan` (Boolean, required)
- `shelf_amount` (Number, required)
- `shelf_id` (Number, required)

#### **User Model**
Hantera användarinformation och autentisering:
- `fullname` (String, required)
- `username` (String, required, unique)
- `password` (String, required, hashas med bcrypt)
- `role` (String, required)

> **Notera**: `password` hashas automatiskt med hjälp av en pre-save hook.

---

### API Endpoints

#### **Beverage Table**
- **Hämta alla drycker**  
  `GET /api/beverages`
  
- **Hämta en dryck (med ID)**  
  `GET /api/beverages/[id]`
  
- **Skapa en ny dryck**  
  `POST /api/beverages/create`
  
- **Uppdatera en dryck (med ID)**  
  `PUT /api/beverages/[id]`
  
- **Ta bort en dryck (med ID)**  
  `DELETE /api/beverages/[id]`

- **Fyll databasen med exempeldata**  
  `POST /api/beverages/seed`

#### **User Table**
- **Hämta alla användare**  
  `GET /api/users`
  
- **Hämta en användare (med ID)**  
  `GET /api/users/[id]`
  
- **Skapa en ny användare**  
  `POST /api/users/create`
  
- **Uppdatera en användare (med ID)**  
  `PUT /api/users/[id]`
  
- **Ta bort en användare (med ID)**  
  `DELETE /api/users/[id]`

#### **Autentisering**
- **Logga in användare**  
  `POST /api/auth/login`

---

### Säkerhet
Alla lösenord lagras som hashar via **bcrypt** och autentisering hanteras med **JWT** för att skydda endpoints.

---

### Error Responses

API:t hanterar olika fel med standardiserade HTTP-statuskoder och meddelanden. Här är en översikt över möjliga svar och när de används:

#### **Generella Statuskoder**
- `200 OK`: För lyckade operationer (t.ex. hämtning, uppdatering, radering).
- `201 Created`: För lyckad skapelse av en ny resurs.
- `404 Not Found`: När en resurs inte kan hittas i databasen.
- `400 Bad Request`: När inkommande data är ogiltig eller saknar nödvändiga fält.
- `401 Unauthorized`: För felaktig inloggning eller om åtkomst nekas på grund av saknad/giltig token.
- `500 Internal Server Error`: Vid oförutsedda serverfel.

### Autentisering

API:t använder **JWT (JSON Web Tokens)** för att autentisera och skydda endpoints. Endast användare med en giltig token kan få åtkomst till skyddade resurser. 

#### **JWT-processen**
1. **Login Endpoint**:  
   Vid inloggning (`POST /api/auth/login`) genereras en JWT-token om användarens inloggningsuppgifter är korrekta.  
   - Tokenen innehåller användarens ID, användarnamn och roll, samt är signerad med en hemlig nyckel (`JWT_SECRET`).
   - Tokenen är giltig i 12 timmar och skickas tillbaka till klienten i svaret:  
     ***json
     {
       "success": true,
       "message": "Login successful",
       "token": "<your-jwt-token>"
     }
     ***

2. **Skyddade Endpoints**:  
   För att komma åt skyddade endpoints måste klienten inkludera JWT-tokenen i `Authorization`-headern på alla förfrågningar:  
   ***
   Authorization: Bearer <your-jwt-token>
   ***

#### **Exempel på Skyddad Förfrågan**
**Endpoint**: `GET /api/beverages`  
**Header**:  
***http
Authorization: Bearer <your-jwt-token>
***
Om tokenen är giltig returneras data. Vid ogiltig eller saknad token returneras ett `401 Unauthorized`-svar.

#### **Rollbaserad åtkomst (RBAC)**
API:t stödjer rollbaserad åtkomstkontroll baserat på `role`-fältet i användarmodellen. Exempel på roller kan inkludera:
- **Admin**: Full åtkomst till alla endpoints (CRUD).
- **User**: Begränsad åtkomst, t.ex. endast läsa resurser.

> Rollkontroll kan implementeras i middleware för att validera användarens behörighet baserat på `role` i tokenen.

#### **Felhantering för Autentisering**
- **Ogiltig token** (`401 Unauthorized`):  
  Om en token är ogiltig eller har gått ut:  
  ***json
  {
    "success": false,
    "message": "Invalid or expired token"
  }
  ***

- **Ingen token** (`401 Unauthorized`):  
  Om en token saknas i förfrågan:  
  ***json
  {
    "success": false,
    "message": "Token is required"
  }
  ***

---

### Säkerhetsåtgärder
- Lösenord hashas med **bcrypt** innan de sparas i databasen.
- JWT-token signerad med en säker `JWT_SECRET`.
- Tokenens giltighetstid är begränsad till 12 timmar.
- Rollbaserad åtkomstkontroll möjliggör finjusterad säkerhet.

---
