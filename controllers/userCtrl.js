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
    },
    activateEmail: async (req, res) => {
      try {
        const {activation_token} = req.body
        const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET )


        console.log(user)
        const{name, email, password} = user
        const check = await Users.findOne({email})
        if(check) return res.status(400).json({msg: "cet email existe deja "})

        const newUser = new Users({
          name, email, password
        })

        await newUser.save()

        res.json({msg: "Le compte à bien été activé"})
      }
      catch (err) {
        return res.status(500).json({msg : err.message})
      }
    }, login: async (req, res) => {
      try{
      const {email, password} = req.body
      const user = await Users.findOne({email})

      if(!user) return res.status(400).json({msg : "cet email n'existe pas  "})
    

      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch) return res.status(400).json({msg : "le mot de passe entrer est incorrect "})

      const refresh_token = createRefreshToken({id: user._id})
      res.cookie('refreshtoken', refresh_token, {
        httpOnly : true,
        path: 'user/refresh_token',
        maxAge: 7*24*60*60*1000 // valable 7jours
      })


      res.json({msg: "connexion reussie"})

      } catch (err) {
        
        return res.status(500).json({msg : err.message})
      }
    },

    getAccessToken: (req, res) => {
       
        try {
        const rf_token = req.cookies.refreshtoken
        if(!rf_token)res.status(400).json({msg: "veuillez vous connecter"})
       
        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
          if(err) res.status(400).json({msg: "veuillez vous connecter"})

          const access_token =  createAccessToken({id: user.id})
          res.json({access_token})
          
        })
        }catch (err) {
          return res.status(500).json({msg: err.message})
        }
    },
    forgotPassword : async (req, res) => {
      try{
    const {email} = req.body
    const user = await Users.findOne({email})
    if(!user) return res.status(400).json({msg: "cet email email est invalide"})

    const access_token = createAccessToken({id: user._id})
    const url = `${CLIENT_URL}/user/reset/${access_token}`

    sendEmail(email, url, "FINALISER L'INSCRIPTION")
    res.json({msg: "veuillez verifier votre boite mail pour changer votre mot de passe"})
      } catch (err) {
        return res.status(500).json({msg: err.message})
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