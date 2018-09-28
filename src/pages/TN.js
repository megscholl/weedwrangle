import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import TN from './states/images/state-TN.gif'


class TennesseeState extends Component {
    render() {

        return (
            <div>
                <h2 className="state-h2">Tennessee</h2>

                <NavLink to="/tn">
                    <img src={TN} alt="Tennessee" width="45%"  className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default TennesseeState;