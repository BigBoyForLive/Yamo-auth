const Reservations = require("../models/reservation");
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

reservationCtrl = {
  getAllReservation: async (req, res) => {
    const reservation = await Reservations.find({});
    const user = await Users.findById(req.user.id).select("-password");
    try {
      if (reservation) return res.status(200).json(reservation);
      return res
        .status(400)
        .json( "pas de nouvelles reservations pour le moment" );
    } catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },

  getScannedReservation: async (req, res) => {
    const reservation = await Reservations.find({scaned : true});
    const user = await Users.findById(req.user.id).select("-password");
    try {
      if (reservation) return res.status(200).json(reservation);
      return res
        .status(400)
        .json( "pas de nouvelles reservations pour le moment" );
    } catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },
  
  postReservation: async (req, res) => {
    const { date, Heure, NbHeure } = req.body;

    const utilisateur = await req.user.id;
    const nom = await req.user.name;

    const postes = [
      "poste 1",
      "poste 2",
      "poste 3",
      "poste 4",
      "poste 5",
      "poste 6",
      "poste 7",
      "poste 8",
      "poste 9",
      "poste 10",
      "poste 11",
      "poste 12",
      "poste 13",
      "poste 14",
      "poste 15",
      "poste 16",
      "poste 17",
      "poste 18",
      "poste 19",
      "poste 20",
      "poste 21",
      "poste 22",
      "poste 23",
      "poste 24",
      "poste 25",
    ];

    const poste = postes[Math.floor(Math.random() * postes.length)];

    try {
      const newReservation = new Reservations({
        date,
        Heure,
        poste,
        utilisateur,
        NbHeure,
      });

      const user = await Users.findById(utilisateur);
      console.log(user);

      const posteOccupe = await Reservations.findOne({ poste });

      if (!posteOccupe) {
        await user.reservations.push(newReservation);
        const { email } = req.body;
        await newReservation.save();

        await user.save();

        return res.status(201).json({
          message: ` ${user.name} , votre reservation a bien été prise en compte , votre nouveau  poste est le : ${poste}  `,
        });

      } else {
        await user.reservations.push(newReservation);
        await newReservation.save();
        // res.status(200).json(newReservation)
        return res
          .status(200)
          .json({
            msg: `votre reservation a bien été prise en compte , un poste vous sera attribué sur place Work et Yamo vous remercie`,
          });
      }
    } catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },

  getUserReservations: async (req, res) => {
    try {
      const user = await req.user.id; //req.params.id
      const features = new APIfeatures(
        Reservations.find({ utilisateur: user }),
        req.query
      ).paginating();
      const mesReservations = await features.query.sort("-updatedAt");

      res.json(mesReservations);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteUserReservations: async (req, res) => {
    try {
      
      await Reservations.findByIdAndDelete(req.params.id)
      
      res.json({
        msg: "Deleted reservation",
      });
    } catch (err) {
      return res.status(500).json({ msg: "erreur" });
    }

    
  },
  AdminReservations: async (req, res) => {
    try {
      const {scaned } = req.body;
      // await Reservations.findByIdAndUpdate(req.params.id)
      await Reservations.findOneAndUpdate(
        { _id: req.params.id },
        {
          scaned
        }
      );
     res.json({
        msg: "Update Successfully",
      });
    } catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },
  // if(scan === true) {
  updateReservations: async (req, res) => {
    try {
      const { date,
        Heure,
        NbHeure } = req.body;
      await Reservations.findByIdAndUpdate(
        { id: req.params.id },
        {
          date,
          Heure,
          NbHeure
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.msg });
    }
  },
};

module.exports = reservationCtrl;

