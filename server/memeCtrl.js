const yourMemes = []
const cageMemes = require('./cage')
//add the variable that holds the value of the text input
//let memeUrl =

module.exports = {
    getAllRandom(req, res) {
      res.status(200).send('textTEST')
    },
    addMeme(req, res) {
      yourMemes.push({...req.body, id})
      id++
      res.status(200).send(memeUrl)
    },
    deleteMeme(req, res) {
      const {id} = req.params
      const index = yourMemes.findIndex(meme => (
        meme.id === parseInt(id)
      ))
      yourMemes.splice(index, 1)
      res.status(200).send(yourMemes)
    },
    updateMeme(req, res) {
      
    }
  }