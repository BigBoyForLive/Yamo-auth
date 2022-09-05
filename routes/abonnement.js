const router = require("express").Router();
const abonnementCtrl = require("../controllers/Abonnement");
const authAdmin = require("../middleware/authAdmin");
const auth = require("../middleware/auth");

router.post("/admin", auth,  abonnementCtrl.postAdminAbonnement) //authAdmin
router.get("/abonnement",   auth, abonnementCtrl.getAllAbonnement);//auth

router.post("/userabonnement", auth,  abonnementCtrl.postUserAbonnement);//auth

router.get("/ma_liste", auth,  abonnementCtrl.getUserAbonnement);//auth

router.delete("/supprimer/:id",  auth, abonnementCtrl.deleteUserAbonnement);//auth

router.patch("/modifier/:id",  auth, abonnementCtrl.updateAbonnement);//auth

module.exports = router;
