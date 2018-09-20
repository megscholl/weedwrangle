import React, { Component } from "react";
import './HomeContent.css'
import honeysuckle from '../images/weedwrangle/honeysuckle.jpg'
import loosestrife from '../images/weedwrangle/purple-loosestrife.jpg'
import ivy from '../images/weedwrangle/english-ivy.jpg'


class MainContent extends Component {
    render() {
        return (
            <div>
                <div className="main-p-content">

                    <p>Weed Wrangle&reg;, is a one-day, citywide, volunteer effort to help rescue our public parks and green spaces from invasive species through hands-on removal of especially harmful trees, vines and flowering plants. Typical unwelcome plants are honeysuckle (Lonicera japonica and L. maackii), Chinese privet (Ligustrum sinense), winter creeper (Euonymus fortunei), autumn olive (Elaeagnus umbellata var. parviflora), English ivy (Hedera helix) and kudzu (Pueraria montana var. lobata).</p>
                    
                    <br />
                    
                    <p>
                    Supervised by an experts in invasive weed management, Weed Wrangle&reg;-volunteers will learn, practice, and begin a habit of maintaining an area free of invasive plants and encourage replanting with natives in removal areas. By engaging our neighbors and challenging them to take action in their own spaces, we hope to create a movement that will have the greatest impact on the invasive plant population.
                    </p>

                    <br />

                    <a href="./images/Project_Info.pdf" download="HostInformation" className="join-link">Join Us by Hosting a Weed Wrangle!</a><br/>
                </div>


                <div className="main-images">
                    <img src={honeysuckle} alt="honeysuckle" className="radius-imgs"/>
                    <img src={loosestrife} alt="purple loosestrife" className="radius-imgs"/>
                    <img src={ivy} alt="english ivy" className="radius-imgs"/>
                </div>

            </div>
        )
    }
}

export default MainContent;