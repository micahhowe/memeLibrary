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
                    {/* we will be creating a new reusable component similar to the pokemon from yesterday */}
                    <img src="https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg"></img>
                    <button>Edit</button>
                    <button>Delete</button>
                    {this.props.memeArray.map(el => (
                        <Meme
                        image={this.state.imgValue}
                        key={el.id} //this needs an id but im not sure where to put that
                        data={el} 
                        />
          ))} 
                </div>
            </div>
        )
    }

}