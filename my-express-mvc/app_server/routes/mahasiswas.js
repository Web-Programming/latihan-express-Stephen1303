const express = require("express");
const router = express.Router();

const mahasiswaController = require("../controllers/ControllerMahasiswa");

//Fungsi dan Rute Index
//Untuk memanggil semua data dalam database MonggoDB
router.get("/mahasiswa", mahasiswaController.Index); 
module.exports = router;