import React, {Component} from 'react';
import './App.css';
import Header from '../src/Components/Header'
import ImgInput from '../src/Components/ImgInput'
import YourMemes from '../src/Components/YourMemes'
import MemeCounter from '../src/Components/MemeCounter'
import Footer from '../src/Components/Footer'


class App extends Component {
  constructor() {
    super()

    this.state = {
      memeArray: [1,],
      ImgValue: ''
    }
    
  }
  
  render(){
  return (
    <div className="App">
        <Header />
        <ImgInput />
        <MemeCounter />
        <YourMemes memeArray={this.state.memeArray} />
        <Footer />
    </div>
  );
  }
}

export default App;
