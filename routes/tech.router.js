import express from "express";
import { technologyDetailsCreate } from "../controllers/movies.controller.js";

const techrouter = express.Router();

//C = for POST Creating - Technology
techrouter.post('/', technologyDetailsCreate);

export default techrouter;