import React, {Component} from 'react'
import DeleteButton from './DeleteButton'

export default class Meme extends Component {
    constructor(props) {
        super(props)
    }
    //add a state here that keeps track of the number
    render() {
       console.log('memetest',this.props.id)
        return (
            <div className="meme">
                <div className="img">
                    <img src={this.props.image} alt="" />
                 </div>
                 {/* Replace these 2 with the specific components intended for this purpose */}
                    <button>Edit</button>
                    <button onClick={() => this.props.delete(this.props.id)}>
          Delete
        </button>
            </div>
        )
    }

}