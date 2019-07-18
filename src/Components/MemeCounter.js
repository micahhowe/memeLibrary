import React, {Component} from 'react'

export default class YourMemes extends Component {
    //add a state here that keeps track of the number
    render() {
        return (
            <div className="meme-counter">
                {/* add the state value instead of the static number */}
               <h2>Meme Counter: 1</h2>

            </div>
        )
    }

}