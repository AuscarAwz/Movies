import express from "express";
import { technologyDetailsRecords, technologyDetailsCreate } from "../controllers/techs.controller.js";
//import { technologyDetailsCreate } from "../controllers/techs.post.controller.js";

const techrouter = express.Router();


//R = For POST Creating from - Technology
techrouter.get('/', technologyDetailsRecords);

//C = for POST Creating - Technology
techrouter.post('/', technologyDetailsCreate);

export default techrouter;