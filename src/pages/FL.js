import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import FL from './states/images/state-FL.jpg'


class FloridaState extends Component {
    render() {

        return (
            <div>
                <h2 className="state-h2">Florida</h2>

                <NavLink to="/fl">
                    <img src={FL} alt="Florida" width="40%"  className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default FloridaState;