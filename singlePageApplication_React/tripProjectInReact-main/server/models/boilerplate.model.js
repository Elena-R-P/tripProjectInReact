const mongoose = require("mongoose")


const BoilerPlateSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Can not be empty"],
    },
    dateStart:{
        type: Date,
        required:[true, "Please choose the date"],
    },
    dateFinish:{
        type: Date,
        required:[true, "Please choose the date"],
    },
    description:{
        type: String,
        required:[true, "Can not be empty"],
    },
}, {timestamps:true})


const BoilerPlate = mongoose.model("BoilerPlate", BoilerPlateSchema );

module.exports = BoilerPlate;
