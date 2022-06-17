
const router = require('express').Router()
const uploadImage = require('../middleware/uploadImage')
const uploadCtrl = require('../controllers/uploadCtrl')
// const auth = require('../middleware/auth')

router.post('/upload_avatar', uploadImage,  uploadCtrl.uploadAvatar) // ne pas oublier auth


module.exports = router