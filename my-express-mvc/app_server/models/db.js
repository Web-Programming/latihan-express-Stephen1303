let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/pawII-si52"; //DB : pawII-si5c (lokal)
//let dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2";

mongoose.connect(dbURI, {
    //useneNewUrlParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error :" + error);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected From MongoDB");
});