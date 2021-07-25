import React, { Component } from 'react'
import Planconsent from './Application/Plan_Consent/Planconsent' 
import Header from './Header'
import Sidebar from './Sidebar'


export default class Startapplication extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar />
                <Planconsent />
               

            </div>
        )
    }
}
