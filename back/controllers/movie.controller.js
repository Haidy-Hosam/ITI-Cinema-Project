import Movie from "../models/film.model.js";

// عرض كل الأفلام
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// عرض فيلم حسب الـ ID
export const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// إنشاء فيلم جديد
export const createMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// تحديث فيلم
export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedMovie)
      return res.status(404).json({ message: "Movie not found" });
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// حذف فيلم
export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie)
      return res.status(404).json({ message: "Movie not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// البحث في الأفلام
export const searchMovies = async (req, res) => {
  try {
    const { q, type, minStar } = req.query;
    let query = {};

    if (q) {
      query.$text = { $search: q };
    }

    if (type) {
      query.type = type;
    }

    if (minStar) {
      query.star = { $gte: parseFloat(minStar) };
    }

    const movies = await Movie.find(query).sort({ star: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// الحصول على الأفلام المفضلة
export const getFavoriteMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ fav: true }).sort({ createdAt: -1 });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// تغيير حالة المفضلة
export const toggleFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });

    movie.fav = !movie.fav;
    await movie.save();

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
