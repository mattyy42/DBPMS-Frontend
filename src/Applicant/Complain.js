import React, { Component } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar'
import Header from './Header'
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
                <Header/>
                <Sidebar/>
            </div>
        )
    }
}
export default Complain;
