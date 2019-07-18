const axios = require('axios')


module.exports = {
  addCage(req, res) {
    const rand1 = Math.ceil(Math.random() * 10)
    axios.get(`/api/random/${rand1}`).then(result => {
      this.state.memeArray.push(result.data)
      console.log(memeArray)
    })
  }
}