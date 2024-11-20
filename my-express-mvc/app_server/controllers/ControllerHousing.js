const Housing = require("../models/housing"); //import model Housing

//List data Housing
const Index = async(req, res) => {
    try{
        const housing = await Housing.find();
        res.status(200).json(housing); //200 : OK
        if(!housing){
            res.status(404).json({message: "Collection is Empty"});
        }
    } catch(error) {
        res.status(500).json({message : "Error retrieving users", error});
    }
}
module.exports = {Index}; //export semua fungsi di atas