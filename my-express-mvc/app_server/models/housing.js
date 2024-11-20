const mongoose = require("mongoose");

const housingSchema = new mongoose.Schema({
    idhousing :{
        type: Number,
    },
    name :{
        type: String,
    },
    city : {
        type: String,
    },
    state : {
        type: String,
    },
    photo : {
        type: String,
    },
    availableUnit : {
        type: Number,
    },
    wifi : {
        type: Boolean,
    },
    laundry : {
        type: Boolean,
    }
});

const Housing = mongoose.model('Housing', housingSchema); //(namaModel, namaSchema)
module.exports = Housing;