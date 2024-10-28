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
};

//C = For POST Creating from - Technology
export const technologyDetailsCreate = async (req, res) => {
    try {
        const { _id, techTitle, techDesc, techAuthor, techPublish, techIndustry } = req.body;
        
        if(!techTitle || !techAuthor || !techIndustry) {
            return res.status(400).json({message: "Missing required fields like this",
                requiredFields: ["techTitle", "techAuthor", "techIndustry"]});
        }

        const newTech = new Tech({
            _id: req.body._id,
            techTitle: req.body.techTitle,
            techDesc: req.body.techDesc,
            techAuthor: req.body.techAuthor,
            techPublish: req.body.techPublish,
            techIndustry: req.body.techIndustry
        });
        
        newTech.save();
        
        return res.status(201).json(newTech);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}