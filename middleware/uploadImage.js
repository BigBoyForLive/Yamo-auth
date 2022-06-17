const fs = require('fs')
// const { object } = require('webidl-conversions')
// // const { object } = require('webidl-conversions')

const uploadImage = async function (req, res, next)  {
    try {
        if(!req.files || Object.keys(req.files).length === 0)
            return res.status(400).json({msg: "aucune image disponible"})

            const file = req.files.file
            console.log(file)

        if(file.size > 1024 * 1024){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "taille de l'image trop grande , veuillez choisir une image de moin de 2 mo"})
            
            
        } //1mb

        

        // if(file.mimetemp !== 'image/jpeg' && file.mimetemp !== 'image/png' && file.mimetemp !== 'image/jpg' && file.mimetemp !== 'image/JPG'){
        //     removeTmp(file.tempFilePath)
        //     return res.status(400).json({msg: "ce format n'est pas supporté"})
            
        // }

        next()

    } catch (err) {

        return res.status(500).json({msg: err.message})
        
    }
    
}
const removeTmp = (path) => {
    fs.unlink(path, err => {
        if(err) throw err
    }) 
}


module.exports = uploadImage