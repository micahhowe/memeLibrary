import React, {Component} from 'react'

export default class Meme extends Component {
    constructor(props) {
        super(props)
        this.state = {
            val: '',
            change: false
          }
    }
    toggleChange() {
        this.setState({ change: !this.state.change })
      }
      handleChange(e) {
        //console.log(e.target.value)
        this.setState({ val: e.target.value })
      }
      update() {
          console.log('testing',this.props)
        this.props.updateMemeBtn(this.props.id, {img: this.state.val} )
        this.toggleChange()
      }
    //add a state here that keeps track of the number
    render() {
        return (
            <div className="meme">
                <div className="img">
                <img src={this.props.image} alt="Funny Meme" />
                </div>
                <div className="button">
                {this.state.change ? (
          <div>
            <input
              type="text"
              onChange={e => this.handleChange(e)}
            />
            <button onClick={() => this.update()}>Save</button>
            <button onClick={() => this.toggleChange()}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => this.toggleChange()}>Edit</button>
        )}
                   
                 </div>
                 {/* Replace these 2 with the specific components intended for this purpose */}
                    <button onClick={() => this.props.deleteMemeBtn(this.props.id)}>
          Delete
        </button>
            </div>
        )
    }

}