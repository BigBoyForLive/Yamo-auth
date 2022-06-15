const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SendmailTransport = require('nodemailer/lib/sendmail-transport')
const sendMail = require('./sendMail')

const {CLIENT_URL} = process.env.CLIENT_URL
const userCtrl = {
    register: async (req, res) => {
        try{
            const {name, email, password} = req.body
            if(!name || !email || !password )
            return res.status(400).json({msg : "veuilez remplir toutes les case "})

            if(!validateEmail(email))
            return res.status(400).json({msg : "l'email saisi n'est pas valide"})
            
            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg : "cet email est est déjà pris "})
            

            if(password.length < 6)
            return res.status(400).json({msg : "le mot de passe doit contenir au moins 6 charactères"})
            
            const passwordHash = await bcrypt.hash(password, 12)
            
            const newUser = {
                name, email, password: passwordHash
            }

            const activation_token = createActivationToken(newUser)
            const url = `${CLIENT_URL}/user/activate/${activation_token}`
             
            sendMail(email, url)
            
            



            console.log({activation_token})


            res.json({msg : "Inscription reussie , veuillez activer votre email" });

        } catch (err) {
            return res.status(500).json({msg : err.message})
        }
    }
}


const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET , {expiresIn:'5m'  })
  }
const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET , {expiresIn:'15m'  })
  }
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET , {expiresIn:'7d'  })
  }


module.exports = userCtrl;