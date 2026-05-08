# Film API

A RESTful API for managing a movie database, built with Node.js, Express, and MongoDB.

## Features

- **CRUD Operations**: Create, read, update, and delete movies.
- **Search Functionality**: Search movies by text (title/description), genre (type), and minimum rating (star).
- **Favorites System**: Toggle movies as favorites and retrieve a list of favorite movies.
- **Validation**: Built-in Mongoose validation for movie schemas.
- **Error Handling**: Centralized error handling middleware.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Other Tools**: dotenv, cors, nodemon, prettier

## Project Structure

- `back/config/`: Database configuration
- `back/controllers/`: Route logic and database operations
- `back/middleware/`: Custom middleware (e.g., error handling, validation)
- `back/models/`: Mongoose schemas and models
- `back/routes/`: API endpoint definitions

## Setup & Installation

1. Clone the repository.
2. Navigate to the backend directory:
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
5. Start the development server:
   ```bash
   npm run dev
   ```

The server will start running at `http://localhost:5001`.

## API Endpoints

### Movies

- **GET `/films`**: Get all movies
- **GET `/films/:id`**: Get a movie by ID
- **POST `/films`**: Create a new movie
  - Requires body: `title`, `image`, `date`, `star`, `description`, `type`, `duration`, `language`, `source`
- **PUT `/films/:id`**: Update an existing movie
- **DELETE `/films/:id`**: Delete a movie
- **PATCH `/films/:id/favorite`**: Toggle a movie's favorite status

### Search & Filters

- **GET `/films/search?q={query}&type={type}&minStar={rating}`**: Search movies based on text query, genre (type), and minimum star rating
- **GET `/films/favorites`**: Get all favorite movies
