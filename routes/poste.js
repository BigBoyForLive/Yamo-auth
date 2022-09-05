const router = require("express").Router();
const poste = require("../controllers/post");

router.post("/creer", poste.createPost);
router.get("/lire", poste.readPost);

module.exports = router;
