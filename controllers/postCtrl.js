const Postes = require('../models/post')


const posteCtrl = ({

    getPostes : async (req, res) => {
        try {
            const details = await Postes.find();
            if (details) return res.status(200).json(details);
            
            return res.status(400).json({msg : "il n'y a pas de postes pour le moment"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
            // res.status(500).json(error)
        }
    },

    postPostes : async (req, res) => {
        try {
            
            const {nom , classe, date } = req.body
            const newDate = date.toString
            const newPost = new Postes({
                nom , classe, newDate
            });
	        
            if (!nom || !classe) 
            return res.status(400).json({msg : "veulleiz remplir toutes les cases"});
             await newPost.save();
            return res.status(200).json({msg: "le poste a bien été créé"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})

        }
    },
    
    
})

// if(postes) return res.status(200).json(postes);
        // return res.status(400).json({msg : "il n'y a pas de poste s pour le moment"})

        module.exports = posteCtrl