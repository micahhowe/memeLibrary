// how to I make sure that all the memes get sent in getmemearray
const cageMemes = require('./cage.json')
const allMemes = require('./allMemes.js')
//add the variable that holds the value of the text input
//let memeUrl =
let id = 3

module.exports = {
    getMemeArray(req, res) {
        res.status(200).send(allMemes)
    },
    // I need to create the controller for allmemes that brings in the memeArray
    getAllRandom(req, res) {
      res.status(200).send(cageMemes)
    },
    addMeme(req, res) {
      allMemes.push({...req.body, id})
      id++
      res.status(200).send(allMemes)
    },
    deleteMeme(req, res) {
      const {id} = req.params
      const index = allMemes.findIndex(meme => (
        meme.id === parseInt(id)
      ))
      allMemes.splice(index, 1)
      res.status(200).send(allMemes)
    },
    updateMeme(req, res) {
        //console.log(req.body)
        const {id} = req.params
        const {img} = req.body
        const index = allMemes.findIndex(meme => (
         meme.id === +id
        ))
        allMemes[index].img = img
        res.status(200).send(allMemes)
    }
  }