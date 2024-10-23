import express from "express";
import movieRoute from "./routes/movies.router.js"
import connectDB from "./server/db.js";

const app = express();
const PORT = 6000;
//const connectDB = require('./server/db.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
connectDB();

app.get("/", (req, res) => {
    res.status(200).json({message: "Hello World!"});
})

//Middleware
app.use('/movies', movieRoute);

app.listen("6000",() => {console.log(`Server is running on this port http://localhost:${PORT}`)});