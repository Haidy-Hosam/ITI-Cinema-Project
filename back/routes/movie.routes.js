import express from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  searchMovies,
  getFavoriteMovies,
  toggleFavorite,
} from "../controllers/movie.controller.js";
import { validateMovie } from "../middleware/validation.js";

const router = express.Router();

// Basic CRUD operations
router.get("/", getAllMovies);
router.get("/search", searchMovies);
router.get("/favorites", getFavoriteMovies);
router.get("/:id", getMovieById);
router.post("/", validateMovie, createMovie);
router.put("/:id", validateMovie, updateMovie);
router.patch("/:id/favorite", toggleFavorite);
router.delete("/:id", deleteMovie);

export default router;