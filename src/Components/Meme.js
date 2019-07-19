import React, {Component} from 'react'

export default class Meme extends Component {
    constructor(props) {
        super(props)
    }
    //add a state here that keeps track of the number
    render() {
       
        return (
            <div className="meme">
                <div className="img">
                    <img src={this.props.image} alt="" />
                     <p>test</p>
                 </div>
                 {/* Replace these 2 with the specific components intended for this purpose */}
                    <button>Edit</button>
                    <button>Delete</button>
            </div>
        )
    }

}