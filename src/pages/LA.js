import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import LA from './states/images/state-LA.png'


class LouisianaState extends Component {
    render() {

        return (
            <div>
                <h2 className="state-h2">Louisiana</h2>

                <NavLink to="/la">
                    <img src={LA} alt="Louisiana" width="90%" className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default LouisianaState;