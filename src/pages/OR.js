import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import OR from './states/images/state-OR.png'


class OregonState extends Component {
    render() {

        return (
            <div className="states">
                <h2 className="state-h2">Oregon</h2>

                <NavLink to="/or">
                    <img src={OR} alt="Oregon" width="200px"  className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default OregonState;