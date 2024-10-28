import mongoose from "mongoose";

const technologySchema = mongoose.Schema({
    _id: String,
    techTitle: String,
    techDesc: String,
    techAuthor: String,
    techPublish: Number,
    techIndustry: String    
});

const Tech =  mongoose.model("tech", technologySchema);


export default Tech;

