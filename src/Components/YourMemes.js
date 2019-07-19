import React, {Component} from 'react'
import Meme from './Meme'

export default class YourMemes extends Component {
    constructor(props) {
        super(props)
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
            <div className="your-memes">
                <div className="meme-section-title">
                    <h2>Your Memes</h2>
                </div>
                <div className="meme-library">
                    {/* This map will allow us to access data from the memeArray on state within app.js */}
                    {this.props.memeArray.map(el => (
                        <Meme
                        //I need to pass down everything that might need to be used by the meme component
                        image={el.img}
                        id={el.id}
                        key={el.id} 
                        deleteMemeBtn={this.props.deleteMemeBtn}
                        />
          ))} 
                </div>
            </div>
        )
    }

}