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
    this.deleteMeme = this.deleteMeme.bind(this)
    this.updateMeme = this.updateMeme.bind(this)
  }
  addMeme(body) {
    axios.post('/api/meme', body).then(res => {
      this.setState({memeArray: res.data})
    })
  }
  //This will allow me to update the meme after passing down this function to the child component
  updateMeme(id, body) {
    //console.log('test2',body)
    axios.put(`/api/meme/${id}`, body).then(res => {
      this.setState({memeArray: res.data})
    })
  }
  deleteMeme(id) {
    axios.delete(`/api/meme/${id}`).then(res => {
      this.setState({memeArray: res.data})
    }).catch(function() {
      console.log('could not delete meme');
    })
  }
  // Ideally this componentDidMount will always bring the array based off of its current state
  componentDidMount() {
    axios.get('/api/meme').then(res => {
      this.setState({
        memeArray: res.data
      })
    }).catch(function() {
      console.log('meme not found'); // "oh, no!"
    })
  }
  render(){
  return (
    <div className="App">
        <Header />
        <ImgInput addMemeBtn={this.addMeme}/>
        <MemeCounter memeArray={this.state.memeArray} />
        <YourMemes memeArray={this.state.memeArray} deleteMemeBtn={this.deleteMeme} updateMemeBtn ={this.updateMeme} />
        <Footer />
    </div>
  );
  }
}

export default App;
