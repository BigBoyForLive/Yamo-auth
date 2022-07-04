const mongoose = require('mongoose');
const post = require('./post')

const reservationModel = new mongoose.Schema({
    // Date.toString('yyyy-MM-dd') Date.now('yyyy-MM-dd')
    // {$concat:[ {$substr:["$d", 0, 4]}, "-", {$substr:["$d", 4, 2]}, "-", {$substr:["$d", 6, 2]} ]}
   

    dateDebut : {
        type: Date,
        default : Date.now('dd-yyyy-MM')
    },
utilisateur : {
       type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required : true
},

    abonnement : {
        type : Number,
        default: 0
    },
    poste : {
        type : String,
        default : post
    },
     dateFin : {
        type: Date,
        default : Date({$toDate: "yyyy-MM-dd"})
    }
    
} , {
    timestamps : true
})


module.exports = mongoose.model('Reservations', reservationModel)