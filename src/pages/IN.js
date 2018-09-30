import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import IN from './states/images/state-IN.gif'


class IndianaState extends Component {
    render() {

        return (
            <div className="states">
                <h2 className="state-h2">Indiana</h2>

                <NavLink to="/in">
                    <img src={IN} alt="Indiana" width="160px"  className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default IndianaState;