# API Testing Examples

## 1. Get All Movies

```
GET http://localhost:5000/films
```

## 2. Get Movie by ID

```
GET http://localhost:5000/films/{movie_id}
```

## 3. Create New Movie

```
POST http://localhost:5000/films
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

## 4. Update Movie

```
PUT http://localhost:5000/films/{movie_id}
Content-Type: application/json

{
  "title": "The Matrix Reloaded",
  "star": 7.2
}
```

## 5. Toggle Favorite

```
PATCH http://localhost:5000/films/{movie_id}/favorite
```

## 6. Search Movies

```
GET http://localhost:5000/films/search?q=matrix
GET http://localhost:5000/films/search?type=Action
GET http://localhost:5000/films/search?minStar=8
```

## 7. Get Favorite Movies

```
GET http://localhost:5000/films/favorites
```

## 8. Delete Movie

```
DELETE http://localhost:5000/films/{movie_id}
```
