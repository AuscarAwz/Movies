import express from "express";
import { technologyDetailsCreate, technologyDetailsRecords } from "../controllers/techs.controller.js";

const techrouter = express.Router();

//C = for POST Creating - Technology
techrouter.post('/', technologyDetailsCreate);

//R = For POST Creating from - Technology
techrouter.get('/', technologyDetailsRecords);

export default techrouter;