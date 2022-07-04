const router = require('express').Router()
const reservationCtrl = require('../controllers/reservationCtrl')
const authAdmin  = require('../middleware/authAdmin')
const auth = require('../middleware/auth')

router.get('/reservation', authAdmin  , reservationCtrl.getAllReservation )

router.post('/nouvelle', auth, reservationCtrl.postReservation)

router.get('/liste', auth , reservationCtrl.getUSerReservation )

router.delete('/supprimer/:id', reservationCtrl.annulerReservation)


module.exports = router