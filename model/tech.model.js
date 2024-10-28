import mongoose from "mongoose";

const technologySchema = mongoose.Schema({
    techTitle: String,
    techDesc: String,
    techAuthor: String,
    techPublish: Number,
    techIndustry: String    
});

// New schema without _id (MongoDB will auto-generate _id)
// const technologySchemaCreate = mongoose.Schema({
//     techTitle: String,
//     techDesc: String,
//     techAuthor: String,
//     techPublish: Number,
//     techIndustry: String
// });

const Tech =  mongoose.model("tech", technologySchema);
// const TechCreate = mongoose.model("tech", technologySchemaCreate);

export default Tech;

