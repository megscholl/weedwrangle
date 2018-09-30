import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import AL from './states/images/state-al.gif'


class AlabamaState extends Component {
    render() {

        return (
            <div className="states">
                <h2 className="state-h2">Alabama</h2>

                <NavLink to="/al">
                    <img src={AL} alt="Alabama" width="200px"  className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default AlabamaState;