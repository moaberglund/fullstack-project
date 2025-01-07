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

API:t använder **JWT (JSON Web Tokens)** för autentisering och middleware för att skydda rutter i applikationen. Detta säkerställer att endast autentiserade användare kan få åtkomst till skyddade resurser.

#### **JWT-processen**
1. **Login Endpoint**:  
   Vid inloggning (`POST /api/auth/login`) genereras en JWT-token om användarens inloggningsuppgifter är korrekta.  
   - Tokenen innehåller användarens ID, användarnamn och eventuell roll, samt är signerad med en hemlig nyckel (`JWT_SECRET`).
   - Tokenen är giltig i 12 timmar och skickas tillbaka till klienten:  
     ```json
     {
       "success": true,
       "message": "Login successful",
       "token": "<your-jwt-token>"
     }
     ```

2. **Lokal lagring av token**:  
   Klienten sparar token i `localStorage` och inkluderar den i `Authorization`-headern för skyddade API-förfrågningar.  

3. **Middleware för ruttskydd**:  
   I frontend-applikationen används en middleware (`auth.js`) för att:  
   - Kontrollera om en giltig token finns i `localStorage`.  
   - Dekoda tokenen med hjälp av `jwt-decode` och verifiera dess giltighetstid.  
   - Navigera användaren till `/login` om tokenen har gått ut, är ogiltig eller saknas.  

   Exempel på middleware-logik:  
   ```javascript
   import * as jwtDecode from 'jwt-decode';

   export default defineNuxtRouteMiddleware((to, from) => {
       const token = localStorage.getItem('authToken');

       if (token) {
           try {
               const decodedToken = jwtDecode(token);
               const currentTime = Date.now() / 1000;

               if (decodedToken.exp < currentTime) {
                   localStorage.removeItem('authToken');
                   return navigateTo('/login');
               }
           } catch (error) {
               localStorage.removeItem('authToken');
               return navigateTo('/login');
           }
       } else if (to.name !== 'login') {
           return navigateTo('/login');
       }
   });
   ```

4. **Skyddade Endpoints**:  
   När en användare navigerar till en skyddad sida utan giltig token, omdirigeras de automatiskt till inloggningssidan.

#### **Felhantering för Autentisering**
- **Ogiltig token** (`401 Unauthorized`):  
  Om en token är ogiltig eller har gått ut:  
  ```json
  {
    "success": false,
    "message": "Invalid or expired token"
  }
  ```

- **Ingen token** (`401 Unauthorized`):  
  Om en token saknas i förfrågan:  
  ```json
  {
    "success": false,
    "message": "Token is required"
  }
  ```

---

### Säkerhetsåtgärder
- **Server-sidan**:  
  - Lösenord hashas med **bcrypt** innan de sparas i databasen.
  - JWT-token signerad med en säker `JWT_SECRET`.
  - Tokenens giltighetstid är begränsad till 12 timmar.  

- **Klient-sidan**:  
  - Middleware validerar tokenens giltighet och skyddar skyddade rutter.
  - Ogiltiga eller utgångna tokens tas bort automatiskt från `localStorage`.  

---

## Front End - Projektstruktur och funktionalitet 

### 1. Mappstrukturens funktionalitet

- **components**: Återanvändbara Vue-komponenter som används på flera sidor, t.ex. `AppHeader.vue`, `AppFooter.vue`, `beverageBubble.vue`, `certBubble.vue`, `Breadcrumbs.vue` och `LoginForm.vue`.
- **layouts**: Standardlayouter för sidor, t.ex. `default.vue` (för alla sidor utom inloggning) och `login.vue` (för inloggningssidan).
- **pages**: Dynamiska rutter och sidinnehåll, t.ex. sidor för login, index, dryckernas subkategorier och specifika drycker.
- **plugins**: Vue-plugins som används globalt, t.ex. FontAwesome för ikoner.
- **assets/css**: Anpassade CSS-filer som `main.css` och `normalize.css` för global styling och överriding av stilar.

### 2. Detaljer om styling

- **Bootstrap**: Projektet använder Bootstrap för grundläggande styling och layout. [Bootstrap-dokumentationen](https://getbootstrap.com) kan användas för referens och ytterligare anpassning.
- **main.css**: Denna fil innehåller globala stilar och används för eventuella overrides eller egna stilar. Stilar är också scopade till de enskilda `.vue`-filerna när det är relevant.

### 3. Hantering av tillstånd

- Projektet använder Vue:s inbyggda mekanismer för tillståndshantering. Det finns för närvarande ingen användning av externa bibliotek som Pinia eller Vuex.

### 4. Autentisering och middleware

- **Tokenhantering**: Efter lyckad inloggning sparas autentiseringstoken i `localStorage` för att användas vid följande API-förfrågningar.
- **Middleware**: Middleware används för att skydda rutter och säkerställa att endast autentiserade användare kan få åtkomst till vissa sidor. Detta hanteras genom en `auth.js`-middleware som kontrollerar token och omdirigerar användare vid behov.

### 5. Responsiv design

- Projektet är designat för att vara responsivt, vilket innebär att sidorna fungerar både på mobila enheter och stationära enheter. Layouten använder sig av Bootstrap:s grid-system för att anpassa sig till olika skärmstorlekar.

### 6. API-integration

- **Backend-API**: Frontend-applikationen integreras med backend-API:t via `fetch`-förfrågningar för att hämta drycker och annan relevant data. API-förfrågningar görs från relevanta `.vue`-komponenter.
- **Bas-URL**: Bas-URL för API:t och andra miljövariabler som `MONGODB_URI` och `JWT_SECRET` definieras i `.env`-filen.
