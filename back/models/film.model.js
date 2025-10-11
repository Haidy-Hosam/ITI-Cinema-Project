import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Image URL is required"],
      trim: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    date: {
      type: Date,
      required: [true, "Release date is required"],
    },
    star: {
      type: Number,
      default: 0,
      min: [0, "Rating cannot be negative"],
      max: [10, "Rating cannot exceed 10"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    type: {
      type: String,
      trim: true,
    },
    duration: {
      type: Number,
      min: [1, "Duration must be at least 1 minute"],
    },
    language: {
      type: String,
      trim: true,
    },
    source: {
      type: String,
      trim: true,
    },
    fav: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Index for better search performance
movieSchema.index({ title: "text", description: "text" });
movieSchema.index({ type: 1 });
movieSchema.index({ star: -1 });

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
