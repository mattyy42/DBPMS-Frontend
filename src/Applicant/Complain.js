import React, { Component } from 'react'
import axios from 'axios';
class Complain extends Component {
   constructor(props){
    super(props);
    this.state={
        id:"",
    }

   }
   componentDidMount(){
    const { id } = this.props.match.params;
    this.setState({
        id:id
    })
   }
    render() {
        return (
            <div>
                application:{this.state.id}
            </div>
        )
    }
}
export default Complain;
