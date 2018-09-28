import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import TX from './states/images/state-TX.png'


class TexasState extends Component {
    render() {

        return (
            <div>
                <h2 className="state-h2">Texas</h2>

                <NavLink to="/tx">
                    <img src={TX} alt="Texas" width="100%" className="outlines"/>
                </NavLink>
            </div>
        )
    
    }
}

export default TexasState;