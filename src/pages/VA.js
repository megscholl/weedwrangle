import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import VA from './states/images/state-VA.gif'


class VirginiaState extends Component {
    render() {

        return (
            <div>
                <h2 className="state-h2">Virginia</h2>

                <NavLink to="/va">
                    <img src={VA} alt="Virginia" width="50%" className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default VirginiaState;