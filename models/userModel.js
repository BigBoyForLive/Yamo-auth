const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "veuillez entrer votre nom "],
      trim: true,
    },

    firstName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "veuillez entrer votre email"],
      trim: true,
      unique: true,
    },

    phone: {
      type: Number,
      required: [true, "Veuillez entrer un numero de telephone"],
    },

    password: {
      type: String,
      required: [true, "veuillez entrer votre mot de passe "],
    },

    role: {
      type: Number,
      default: 0, // 0 pour les utilisateurs simple , et 1 pour l'admin
    },

    sexe: {
      type: Number,
      default: 0,
    },

    reservations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservations", // reférence vers la bd Reservation
        required: true,
      },
    ],
    abonnements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Abonnements", // reférence vers la bd Reservation
        required: true,
      },
    ],

    ambassador : {
      type : Number,
      default : 0  // 0 for non-ambassador , 1 for ambassador , 2 for high - level ambassador
    },

    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/it-engineering-factory/image/upload/v1654873543/mes%20outils/avatar_v8ixww.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
