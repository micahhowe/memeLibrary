import React, {Component} from 'react'
const axios = require('axios')

const rand1 = Math.ceil(Math.random() * 10)


export default class ImgInput extends Component {
    constructor() {
    super()
        
    this.state = {
        imgValue: ''
      }
    }
    handleChange(e) {
        this.setState({ imgValue: e.target.value })
        //console.log(e.target.value) // I was using this to showcase the onchange 
    }
        //i have no idea to push the random image to the array let alone do it from the server
    render() {
        
        return (
            <div className="Insert-Image">
                <span>Insert Image URL</span>
                <input onChange={e => this.handleChange(e)} type='text' placeholder='Make sure this is a full URL' />
                {/* I am going to want to push the imgValue to my memeArray on an object with an id */}
                <button>Add Meme</button>
                {/* The onClick needs to be an arrow function so it doesn't immediately run */}
                <button onClick={() => alert('string')}>Add Random Meme</button>
            </div>
        )
    }

}