const router = require("express").Router();
const reservationCtrl = require("../controllers/reservationCtrl");
const authAdmin = require("../middleware/authAdmin");
const auth = require("../middleware/auth");


router.get("/reservation_scaned", auth , reservationCtrl.getScannedReservation);

router.get("/reservation", auth , reservationCtrl.getAllReservation); //auth

router.post("/nouvelle", auth,  reservationCtrl.postReservation); //auth

router.get("/liste",  auth, reservationCtrl.getUserReservations);//auth

router.delete("/supprimer/:id",  reservationCtrl.deleteUserReservations);//auth

router.patch("/modifier/:id",   auth,reservationCtrl.updateReservations);//auth

router.patch("/scan/:id", reservationCtrl.AdminReservations )

module.exports = router;
