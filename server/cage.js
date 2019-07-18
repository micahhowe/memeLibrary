const axios = require('axios')


module.exports = {
  getPokemon(req, res) {
    const cageArr = []
    const rand1 = Math.ceil(Math.random() * 10)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`).then(result => {
      cageArr.push(result.data)
      axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`).then(result => {
      cageArr.push(result.data)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`).then(result => {
          cageArr.push(result.data)
          res.status(200).send(cageArr)
        })
      })
    })
  }
}