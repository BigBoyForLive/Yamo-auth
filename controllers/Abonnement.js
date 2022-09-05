const Abonnements = require("../models/abonnement");
const sendMail = require("./sendMail");
const Users = require("../models/userModel");
const SendmailTransport = require("nodemailer/lib/sendmail-transport");

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 5;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

abonnementCtrl = {
  getAllAbonnement: async (req, res) => {
    const abonnement = await Abonnements.find({});
    try {
      if (abonnement) return res.status(200).json(abonnement);
      return res
        .status(400)
        .json({ msg: "pas d'abonnements pour le moment" });
    } catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },
  postAdminAbonnement : async (req, res) => {
    const { forfait,
      prix,
      NbHeure, duree } = req.body;    
    try {
      const newAbonnement = new Abonnements({
        forfait,
        prix,
        NbHeure,
        duree
      });

        await newAbonnement.save();
        
        return res.status(201).json({
          message: "ajouter avec succes",
        });
     
      }
     catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },
  postUserAbonnement: async (req, res) => {
    const { forfait,
      prix,
      NbHeure, duree } = req.body;
    const utilisateur = await req.user.id;
    
   

    try {
      const newAbonnement = new Abonnements({
        forfait,
        prix,
        NbHeure,
        utilisateur,
        duree
      });

      const user = await Users.findById(utilisateur);

      await user.abonnements.push(newAbonnement); 
      await user.save();

          await newAbonnement.save();
          
          return res.status(201).json({
            message: "ajouter avec succes",
          });
     
      }
     catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },

  getUserAbonnement: async (req, res) => {
    try {
      const user = await req.user.id;
      const features = new APIfeatures(
        Abonnements.find({ utilisateur: user }),
        req.query
      ).paginating();

      const mesAbonnement = await features.query.sort("-NbHeure");
    
      res.json({
        mesAbonnement,
        result: mesAbonnement.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteUserAbonnement: async (req, res) => {
    try {
      await Abonnements.findOneAndDelete({ _id: req.params.id });
      res.json({
        msg: "Deleted Abonnement",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }

    // const features = Reservations.findByIdAndDelete({reservation : req.params.id})
  },
  updateAbonnement: async (req, res) => {
    try {
      const { forfait,
        prix,
        NbHeure, } = req.body;
      await Abonnements.findByIdAndUpdate(
        { id: req.params.id },
        {
          forfait,
          prix,
          NbHeure,
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },
};

module.exports = abonnementCtrl;
