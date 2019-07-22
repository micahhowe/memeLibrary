import React, {Component} from 'react'
let inputStyle = {width:'110px'}
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
    render() {
        // These destructure statements work because they snatch the value in {} off the object and make that its own variable
        let { change } = this.state
        let { deleteMemeBtn } = this.props
        return (
            <div className="meme">
                <div className="img">
                <img src={this.props.image} alt="Funny Meme" onClick={() => this.props.alertIt(this.props.id)}/>
                </div>
                <div className="button">
                {/* This 'change' has been destructured right after the render above */}
                {change ? (
          <div>
              
            <input style={inputStyle}
              type="text" placeholder='URL'
              onChange={e => this.handleChange(e)}
            />
            <button onClick={() => this.update()}>Save</button>
            <button onClick={() => this.toggleChange()}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => this.toggleChange()}>Edit</button>
        )}
                   
                 </div>
                 {/* This 'deleteMemeBtn' has been destructured right after the render above */}
                    <button onClick={() => deleteMemeBtn(this.props.id)}>
          Delete
        </button>
            </div>
        )
    }

}