import React, {Component} from 'react'

export default class ImgInput extends Component {
    render() {
        return (
            <div className="Insert-Image">
                <span>Insert Image URL</span>
                <input type='text' placeholder='Make sure this is a full URL' />
                <button>Add Meme</button>
                <button>Add Random Meme</button>
            </div>
        )
    }

}