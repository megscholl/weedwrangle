import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import GA from './states/images/state-ga.gif'


class GeorgiaState extends Component {
    render() {

        return (
            <div className="states">
                <h2 className="state-h2">Georgia</h2>

                <NavLink to="/ga">
                    <img src={GA} alt="Georgia" width="200px"  className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default GeorgiaState;