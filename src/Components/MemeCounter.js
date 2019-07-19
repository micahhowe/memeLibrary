import React, {Component} from 'react'

export default class YourMemes extends Component {
    //add a state here that keeps track of the number
    constructor(props) {
        super(props)

        this.state ={
            val: this.props.memeArray.length
        }
    }
    render() {
        return (
            <div className="meme-counter">
                {/* add the state value instead of the static number */}
                {/* This will need to be a state instead of just the length value of memeArray, but it is currently working */}
               <h2>Meme Counter: {this.state.val}</h2>

            </div>
        )
    }

}