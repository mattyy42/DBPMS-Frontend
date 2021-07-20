import React, { Component } from 'react'
import Dashboard from './Dashboard'
import Sidebar from './Sidebar'
import Header from './Header'
class Fullpage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidebar/>
                <Dashboard/>
            </div>
        )
    }
}
export default Fullpage;
