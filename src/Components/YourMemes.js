import React, {Component} from 'react'

export default class YourMemes extends Component {
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
                </div>
            </div>
        )
    }

}