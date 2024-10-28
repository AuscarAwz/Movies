import express from "express";
import { technologyDetailsCreate } from "../controllers/techs.post.controller.js";


const techrouterpost = express.Router();

techrouterpost.post('/', technologyDetailsCreate);

export default techrouterpost;