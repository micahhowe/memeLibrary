import React, {Component} from 'react'

export default class DeleteButton extends Component {
    //add a state here that keeps track of the number
    constructor(props) {
        super(props)
    }
    render() {
        //console.log('testDelete',this.props)
        return (
            <button onClick={() => this.props.deleteMeme(this.props.data.id)}>Delete</button>
        )
    }

}