import Tech from "../model/tech.model.js";


//R = For GET Reading from - Technology
export const technologyDetailsRecords = async (req, res) => {
    try {
        const techDetails = await Tech.find();
        console.log(techDetails);
        return res.status(200).json(techDetails);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

export const technologyDetailsCreate = async (req, res) => {
    try {
        const { techTitle, techDesc, techAuthor, techPublish, techIndustry } = req.body;
        
        if(!techTitle || !techAuthor || !techIndustry) {
            return res.status(400).json({message: "Missing required fields like this",
                requiredFields: ["techTitle", "techAuthor", "techIndustry"]});
        }

        const newTechCreate = new TechCreate({
            
            techTitle: req.body.techTitle,
            techDesc: req.body.techDesc,
            techAuthor: req.body.techAuthor,
            techPublish: req.body.techPublish,
            techIndustry: req.body.techIndustry
        });
        
        await newTechCreate.save();
        
        return res.status(201).json(newTechCreate);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}