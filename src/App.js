import React, {Component} from 'react';
import './App.css';
import Header from '../src/Components/Header'
import ImgInput from '../src/Components/ImgInput'
import YourMemes from '../src/Components/YourMemes'
import MemeCounter from '../src/Components/MemeCounter'
import Footer from '../src/Components/Footer'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      //memeArray: ['meme1', 'meme2', 'meme3'],
      memeArray: [],
      ImgValue: ''
    }
    this.addMeme = this.addMeme.bind(this)
  }
  addMeme(body) {
    axios.post('/api/memes', body).then(res => {
      this.setState({memeArray: res.data})
    })
  }
  deleteMeme(id) {
    axios.delete(`/api/meme/${id}`).then(res => {
      this.setState({memeArray: res.data})
    })
  }
  // Ideally this componentDidMount will always bring reset the array based off of its current state
  componentDidMount() {
    axios.get('/api/memes').then(res => {
      this.setState({
        memeArray: res.data
      })
    })
  }
  render(){
  return (
    <div className="App">
        <Header />
        <ImgInput addMemeBtn={this.addMeme}/>
        <MemeCounter memeArray={this.state.memeArray} deleteMemeBtn={this.deleteMeme}/>
        <YourMemes memeArray={this.state.memeArray} />
        <Footer />
    </div>
  );
  }
}

export default App;
