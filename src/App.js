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
      memeArray: []
    }
    
  }
  render(){
  return (
    <div className="App">
      <body>
        <Header />
        <ImgInput />
        <MemeCounter />
        <YourMemes />
        <Footer />
      </body>
    </div>
  );
  }
}

export default App;
