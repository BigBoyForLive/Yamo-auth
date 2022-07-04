const mongoose = require('mongoose');

const PosteSchema = new mongoose.Schema({
    nom :{
        type: String,
        required: true,
        trim: true
    },
    classe  : {
        type : Number,
        required: true
    },
    acces : {
        type: Number,
        default : 0
    }
},
{
    timestamps: true
})

module.exports = mongoose.model("Postes" , PosteSchema)
