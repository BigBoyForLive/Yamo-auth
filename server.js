require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')


const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true 
}))

// routes => /user/register

app.use('/user', require('./routes/userRouter'))
app.use('/api' , require('./routes/reservation'))


mongoose.connect('mongodb://localhost:27017', {
    // useCreateIndex: true, 
    // useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("connecté a mongo db")
})






const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log('le serveur tourne sur le port ', PORT)
})