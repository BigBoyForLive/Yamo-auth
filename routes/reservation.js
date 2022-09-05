const router = require("express").Router();
const reservationCtrl = require("../controllers/reservationCtrl");
const authAdmin = require("../middleware/authAdmin");
const auth = require("../middleware/auth");

router.get("/reservation",   authAdmin, reservationCtrl.getAllReservation); //auth

router.post("/nouvelle", auth,  reservationCtrl.postReservation); //auth

router.get("/liste",  auth, reservationCtrl.getUserReservations);//auth

router.delete("/supprimer/:id", auth,  reservationCtrl.deleteUserReservations);//auth

router.patch("/modifier/:id",   auth,reservationCtrl.updateReservations);//auth

module.exports = router;
