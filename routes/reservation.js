const router = require('express').Router()
const reservationCtrl = require('../controllers/reservationCtrl')
const authAdmin  = require('../middleware/authAdmin')
const auth = require('../middleware/auth')

router.get('/reservation', authAdmin  , reservationCtrl.getAllReservation) 

router.post('/nouvelle', auth, reservationCtrl.postReservation)

router.get('/liste', auth,  reservationCtrl.getUserReservations)

router.delete('/supprimer/:id', auth,  reservationCtrl.deleteUserReservations)

router.patch('/modifier/:id', auth,  reservationCtrl.updateReservations)




module.exports = router