const express = require('express')
const app = express()
const PORT = 3500
const memeCtrl = require('./memeCtrl')

app.use(express.json())

app.get('/api/meme', memeCtrl.getMemeArray)
//app.get('/api/random/:id', memeCtrl.getAllRandom) //I should be able to do this without the server
app.post('/api/meme', memeCtrl.addMeme)
//^^this will add a meme to the array
//delete is now working correctly to delete a particular id
app.delete('/api/meme/:id', memeCtrl.deleteMeme)
//VVV this will update the meme 
app.put('/api/meme/:id', memeCtrl.updateMeme)

app.listen(PORT, () => console.log(`${PORT} deep fried memes`))