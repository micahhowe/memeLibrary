import React, {Component} from 'react'

export default class ImgInput extends Component {
    constructor() {
    super()
        this.state = {
          imgValue: '',
        }
    }
        handleChange(e) {
            this.setState({ imgValue: e.target.value })
            console.log(e.target.value)
        }
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