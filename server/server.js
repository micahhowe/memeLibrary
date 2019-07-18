const express = require('express')
const app = express()
const PORT = 3500
const memeCtrl = require('./memeCtrl')

app.use(express.json())

app.get('/api/random/:id', memeCtrl.getAllRandom)
//app.post('/api/memes', memeCtrl.addRandom)
//app.delete('/api/memes/:id', memeCtrl.deleteMeme)
//app.put('/api/memes/:id', memeCtrl.updateMeme)

app.listen(PORT, () => console.log(`${PORT} deep fried memes`))