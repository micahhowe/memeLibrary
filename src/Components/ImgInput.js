import React, {Component} from 'react'
const axios = require('axios')

const rand1 = Math.ceil(Math.random() * 10)


export default class ImgInput extends Component {
    constructor() {
    super()
        
    }
    handleChange(e) {
        this.setState({ imgValue: e.target.value })
        console.log(e.target.value)
    }
        //i have no idea to push the random image to the array let alone do it from the server
    render() {
        
        return (
            <div className="Insert-Image">
                <span>Insert Image URL</span>
                <input onChange={e => this.handleChange(e)} type='text' placeholder='Make sure this is a full URL' />
                <button>Add Meme</button>
                <button>Add Random Meme</button>
            </div>
        )
    }

}