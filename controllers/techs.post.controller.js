import TechPost from "../model/tech.post.model.js";


//C = For POST Creating from - Technology
export const technologyDetailsCreate = async (req, res) => {
    try {
        const { techTitle, techDesc, techAuthor, techPublish, techIndustry } = req.body;
        
        if(!techTitle || !techAuthor || !techIndustry) {
            return res.status(400).json({message: "Missing required fields like this",
                requiredFields: ["techTitle", "techAuthor", "techIndustry"]});
        }

        const newTechPost = new TechPost({
            
            techTitle: req.body.techTitle,
            techDesc: req.body.techDesc,
            techAuthor: req.body.techAuthor,
            techPublish: req.body.techPublish,
            techIndustry: req.body.techIndustry
        });
        
        newTechPost.save();
        
        return res.status(201).json(newTech);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}