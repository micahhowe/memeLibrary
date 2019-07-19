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
        console.log('yourmemes',this.props.memeArray)
        return (
            <div className="your-memes">
                <div className="meme-section-title">
                    <h2>Your Memes</h2>
                </div>
                <div className="meme-library">
                    {/* we will be creating a new reusable component similar to the pokemon from yesterday */}
                    {/* This map will allow us to access data from the memeArray on state within app.js */}
                    {this.props.memeArray.map(el => (
                        <Meme
                        image={el.img}
                        id={el.id}
                        key={el.id} //this needs an id but im not sure where to put that
                        deleteMemeBtn={this.props.deleteMemeBtn}
                        />
          ))} 
                </div>
            </div>
        )
    }

}