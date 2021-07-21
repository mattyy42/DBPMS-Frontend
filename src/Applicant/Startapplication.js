import React, { Component } from 'react'
import Apply from './Planconsent'
import Dashboard from './Dashboard'
import Header from './Header'
import Sidebar from './Sidebar'


export default class Startapplication extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Apply />
               

            </div>
        )
    }
}
