import express from "express";
import { movieIndex, movieIndexById ,movieCreate, movieUpdate, movieDelete } from "../controllers/movies.controller.js";


const router = express.Router();

//R - for GET Reading
//router.get('/', (req, res) => { res.status(200).json({message: "Get all movies"}) });
router.get('/', movieIndex);

router.get('/:id', movieIndexById);


//C = for POST Creating
//router.post('/', (req, res) => { res.status(200).json({message: "Create a movie"}) })
router.post('/', movieCreate);

//U = for PUT Updating
router.put('/:id', movieUpdate)

//D = for DELETE Deleting
router.delete('/:id', movieDelete)

export default router;