# Film API

Film API using Node.js, Express, and MongoDB.

## Technologies Used

- Node.js
- Express
- MongoDB & Mongoose
- CORS
- dotenv

## Installation

1. Clone the repository.
2. Navigate to the `back` directory:
   ```bash
   cd back
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the `back` directory and add your MongoDB connection string:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```

## Running the Application

To start the development server:

```bash
cd back
npm run dev
```

The server will start and listen on `http://localhost:5001/`.

## API Endpoints

### 1. Get All Movies

```http
GET http://localhost:5001/films
```

### 2. Get Movie by ID

```http
GET http://localhost:5001/films/{movie_id}
```

### 3. Create New Movie

```http
POST http://localhost:5001/films
Content-Type: application/json

{
  "title": "The Matrix",
  "image": "https://example.com/matrix.jpg",
  "date": "1999-03-31",
  "star": 8.7,
  "description": "A computer hacker learns about the true nature of reality",
  "type": "Action",
  "duration": 136,
  "language": "English",
  "source": "Warner Bros"
}
```

### 4. Update Movie

```http
PUT http://localhost:5001/films/{movie_id}
Content-Type: application/json

{
  "title": "The Matrix Reloaded",
  "star": 7.2
}
```

### 5. Toggle Favorite

```http
PATCH http://localhost:5001/films/{movie_id}/favorite
```

### 6. Search Movies

```http
GET http://localhost:5001/films/search?q=matrix
GET http://localhost:5001/films/search?type=Action
GET http://localhost:5001/films/search?minStar=8
```

### 7. Get Favorite Movies

```http
GET http://localhost:5001/films/favorites
```

### 8. Delete Movie

```http
DELETE http://localhost:5001/films/{movie_id}
```
