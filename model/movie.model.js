import mongoose, {Schema, model} from "mongoose";

const movieSchema = mongoose.Schema({
    title: String,
    desc: String,
    publish: Number,
    Author: String
});

const Movie = mongoose.model("movie", movieSchema);

export default Movie;