const mongoose = require("mongoose");

const abonnementModel = new mongoose.Schema(
  {
    utilisateur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",  
    },

    forfait: {
      type: String,
      default: "Yamo",
    },

    NbHeure: {
      type: Number,
      default: 03,
    },

    prix: {
      type: Number,
      default : 5,
    },

   
    duree: {
      type: Number,
      default : 5,
    }
  }
);

module.exports = mongoose.model("Abonnement", abonnementModel);