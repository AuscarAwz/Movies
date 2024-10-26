import Movie from "../model/movie.model.js";
import Tech from "../model/tech.model.js";

//R - for GET Reading
export const movieIndex = async (req, res) => { 
    
    try {
        const moviesDetails = await Movie.find();
        console.log(moviesDetails)
        res.status(200).json(moviesDetails)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

//R - for GET Reading Based on ID 
export const movieIndexById = async (req, res) => { 
   try {
    const movieDetailsById = await Movie.findById(req.params.id);
    
    if(!movieDetailsById) {
        return res.status(404).json({message: "No movie found"});
    } else {
        console.log(movieDetailsById)
        return res.status(200).json(movieDetailsById);
    }
} catch (error) {
    return res.status(400).json({message: error.message});
}
};

// export const technologyCreate = async (req, res) => {
//     try {
//     const newTech = new Tech({
//         name: 'John Doe',
//         email: 'johndoe@example.com',
//         password: 'securepassword',
//       });
      
//       newTech.save()
//     } catch (error) {
//         return res.status(400).json({message: error.message});
//     }
// }

//C = for POST Creating
export const movieCreate = async  (req, res) => { 
    
    const {title, desc, publish, author} = req.body;
    
    if(!title || !desc || !author){
        return res.status(400).json({message:"Missing required fields"});
    }

console.log(req.body);
try {

const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
    publish: req.body.publish,
    author: req.body.author
});


    const movieDetails = await newMovie.save();
    return res.status(201).json(movieDetails);
} catch (error) {
    return res.status(400).json({message: error.message});
}
 };


 //U = for PUT Updating
export const movieUpdate = async (req, res) => { 
    try {
        //const MovieUpdateIdNew = await Movie.findOneAndUpdate({_id: req.params.id},
        // {title: req.body.title, desc: req.body.desc, publish: req.body.publish, Actor: req.body.Actor},
        // {new: true}); //Movie => Movie.id == req.params.id
        const MovieUpdateId = await Movie.findById(req.params.id);
    
        if(!MovieUpdateId) {
            return res.status(404).json({message: "Movie not found"});
        }

        const {title, desc, publish, Author} = req.body;

        if(title) {
            MovieUpdateId.title = title;
        }
        if(desc) {
            MovieUpdateId.desc = desc;
        }
        if(publish) {
            MovieUpdateId.publish = publish;
        }
        if(Author) {
            MovieUpdateId.Author = Author;
        }
        console.log(MovieUpdateId)
        const updateMovieResult =await MovieUpdateId.save();
    //     if(MovieUpdateId == null) {
    //     return res.status(404).json({message: "No movie found"});
    // }
    
    // if(req.body.title != null) {
    //     MovieUpdateId.title = req.body.title;
    // }
    // if(req.body.desc != null) {
    //     MovieUpdateId.desc = req.body.desc;
    // }
    // if(req.body.publish != null) {
    //     MovieUpdateId.publish = req.body.publish;
    // }
    // if(req.body.Actor != null) {
    //     MovieUpdateId.Actor = req.body.Actor;
    // }
    // const updateMovieResult = await MovieUpdateId.save();
    // if(updateMovieResult) {
    //     return res.status(200).json(updateMovieResult);
    // }
    //
    return res.status(200).json(updateMovieResult)
} catch (error) {
    return res.status(400).json({message: error.message});
}
 };

//D = for DELETE Deleting
export const movieDelete = async (req, res) => { 
    //const MovieDeleteById = await Movie.findByIdAndDelete(Movie => Movie.id == req.params.id);
    try {
    const MovieDeleteById = await Movie.findByIdAndDelete(req.params.id);
    console.log(MovieDeleteById)
    
        const DeleteMovie = await Movie.deleteOne(MovieDeleteById);
        //const DeleteMovie = await Movie.find(req.params.id);
        return res.status(200).json({message: "Delete a movie",Name: MovieDeleteById.title,
            desc: MovieDeleteById.desc, 
            publish: MovieDeleteById.publish, 
            Author: MovieDeleteById.Author}); 
        
    } catch (error) {
        return res.status(400).json({message: error.message});
    }

     
};