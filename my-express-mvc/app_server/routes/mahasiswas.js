const express = require("express");
const router = express.Router();

const mahasiswaController = require("../controllers/ControllerMahasiswa"); //import ControllerMahasiswa
const { route } = require(".");

//Fungsi dan Rute Index
//Untuk memanggil semua data dalam database MonggoDB
router.get("/", mahasiswaController.Index);
router.post("/insert", mahasiswaController.insert);
router.get("/show/:id", mahasiswaController.show);
router.patch("/update/:id", mahasiswaController.update);
router.delete("/delete/:id", mahasiswaController.destroy);
module.exports = router;