const Postes = require('../models/poste')

const Poste = {
    createPost : async (req, res) => {
        try {
            const {
                title,
                link,
                description
            } = req.body;
            if(!title || ! link || ! description) {
                return res.status(400).json({msg: "veuillez remplir toutes les cases s'il vous plait"})
            }
            else {
                const newPost = new Postes ({
                title,
                link,
                description
                })
    
                await newPost.save()
                res.status(201).json({msg : "votre poste a bien été pris en compte "})
            }


        } catch (err) {
            return res.status(500).json({msg: "erreur inconnue"})
        }
    }, 
    readPost : async (req, res) => {
      try {
        const poste =  await Postes.find({})
        if (poste) 
        return res.status(200).json( {liste : poste})

        else return res.status(400).json({msg: "pas de nouveaux postes pour le moment"})

      } catch (err) {
          return res.status(500).json({msg: "une erreur est survenue lors du traitement de votre requete "})
      }    
    }
}

module.exports =  Poste; 