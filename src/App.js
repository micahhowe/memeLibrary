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
        <ImgInput />
        <MemeCounter memeArray={this.state.memeArray}/>
        <YourMemes memeArray={this.state.memeArray} />
        <Footer />
    </div>
  );
  }
}

export default App;
