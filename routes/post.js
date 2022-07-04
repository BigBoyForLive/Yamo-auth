const router = require('express').Router()

const posteCtrl = require('../controllers/postCtrl');


router.get('/listes', posteCtrl.getPostes)

router.post('/creer', posteCtrl.postPostes)

router.post('/ma-reservation/:id', posteCtrl.getOneReservation)


module.exports = router