const Reservations = require('../models/reservation')
const Postes = require('../models/post')
const Users = require('../models/userModel')
const { deleteOne } = require('../models/userModel')



reservationCtrl = ({
    getAllReservation : async (req, res) => {
        const reservation = await Reservations.find({})
        try {
            if (reservation) 
            return res.status(200).json(reservation);
            return res.status(400).json({msg: "pas de nouvelles reservations pour le moment"});
    
        } catch (err) {
            return res.status(500).json({msg: err.msg})
        }

    },
    postReservation : async (req, res) => {
        const {date, abonnement  } = req.body
        const utilisateur = await (req.user.id)
        const postes = ["poste 1", "poste 2", "poste 3", "poste 4", "poste 5", "poste 6", "poste 7", "poste 8" , "poste 9", "poste 10", "poste 11", "poste 12", "poste 13", "poste 14", "poste 15", "poste 16", "poste 17", "poste 18", "poste 19", "poste 20", "poste 21", "poste 22", "poste 23", "poste 24", "poste 25" ]
        

         const poste =  postes[Math.floor(Math.random()*postes.length)];
        
        try {

            const newReservation = new Reservations({
                date,
                abonnement,
                poste,
                utilisateur
            })
            
            const user = await Users.findById(utilisateur)
            console.log(user)
            
            const posteOccupe =  await Reservations.findOne({poste})
            
            if (!posteOccupe) {

                await user.reservations.push(newReservation)
                // await newReservation.save();
                
                  await  user.save();

                  return res.status(201).json({
                    message :   ` ${user.name} , votre reservation a bien été prise en compte , votre nouveau  poste est le : ${poste}` ,
                    //   utilisateur : {_id: user._id, name: user.name }
                  })

                
                // 
            }
            
            else {

            await user.reservations.push(newReservation)
            // res.status(200).json(newReservation)
            return res.status(200).json({msg : `votre reservation a bien été prise en compte , Work et Yamo vous remercie`})
            
            }
        } catch (err) {
            res.status(500).json({msg: err.msg})
        }
    },
    getUSerReservation : async (req, res) => {
        try {
            const reservationDetail = Reservations.aggregate([
                { $match: { utilisateur: (req.user.id)} }
            ])
                

            return res.status(200).json(reservationDetail)

            

        } catch (err) {
            return res.status(500).json({msg : err.msg})
        }
    },
    annulerReservation : async (req, res) => {
        try {
            
            await Reservations.findByIdAndDelete(req.params.id)

            return res.status(200).json({msg : "votre reservations a été annuléé avec succès"});
        

        } catch (err) {
            res.status(500).json({msg : err.msg})
        }
    
        

    }
    
        
    

})

module.exports = reservationCtrl;