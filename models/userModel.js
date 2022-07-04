const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, "veuillez entrer votre nom "],
      trim: true
  },

  email : {
      type: String,
      required: [true, "veuillez entrer votre email"],
      trim: true,
      unique: true
  },
  reservations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservations', // Reference to some EventSchema
    required : true
  }],

  password: {
    type: String,
    required: [true, "veuillez entrer votre mot de passe "],
    
},
role: {
    type: Number,
    default: 0 // 0 pour les utilisateurs simple , et 1 pour l'admin
    
},
avatar: {
    type: String,
    default: "https://res.cloudinary.com/it-engineering-factory/image/upload/v1654873543/mes%20outils/avatar_v8ixww.png"
    
},

}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema) 

