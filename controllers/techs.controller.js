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