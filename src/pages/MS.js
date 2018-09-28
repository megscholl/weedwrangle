import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import MS from './states/images/state-MS.svg'


class MississippiState extends Component {
    render() {

        return (
            <div>
                <h2 className="state-h2">Mississippi</h2>

                <NavLink to="/ms">
                    <img src={MS} alt="Mississippi" width="25%" className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default MississippiState;