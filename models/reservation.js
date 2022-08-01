const mongoose = require("mongoose");

const reservationModel = new mongoose.Schema(
  {
    // Date.toString('yyyy-MM-dd') Date.now('yyyy-MM-dd')
    // {$concat:[ {$substr:["$d", 0, 4]}, "-", {$substr:["$d", 4, 2]}, "-", {$substr:["$d", 6, 2]} ]}

    dateDebut: {
      type: Date,
      default: Date.now("dd-yyyy-MM"),
    },
    utilisateur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    nom: {
      type: String,
    },

    abonnement: {
      type: Number,
      default: 0,
    },
    poste: {
      type: String,
    },
    dateFin: {
      type: Date,
      default: Date({ $toDate: "yyyy-MM-dd" }),
    },

    createdAt: {
      type: Date,
      default: Date.now,
      index: { expires: 10 * 24 * 60 * 60 },
    }, // efface automatiquement de la db apres 10jours
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Reservations", reservationModel);
