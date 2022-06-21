const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
    nom : {
        type: String,
        require : true ,
        trim: true
    },

    jour: {
        type: String,
        require : true ,
        trim: true
    }, 

    type : {
        type: Number,
        require : true,
        default : 0 // 0 = poste temporare ; 1= poste permanent 

    },

    abonnement : {
        type: Number,
        require : true,
        default : 0 // 0 = journalier ; 1= hebdomadaire; 2 = mensuel 

    }, 
    
    statut : {
        type : Number,
        require: true,
        trim: true  // etudiant , élève , enseignant , 
    }
},
{
        timestamps: true
    })

    module.exports = ("reservation", reservationSchema)