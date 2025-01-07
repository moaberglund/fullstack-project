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


