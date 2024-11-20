const express = require("express");
const router = express.Router();

const housingController = require("../controllers/ControllerHousing"); //import Controllerhousing
const { route } = require(".");

//Fungsi dan Rute Index
//Untuk memanggil semua data dalam database MonggoDB
router.get("/", housingController.Index);
module.exports = router;