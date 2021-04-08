import React from 'react'
import './Team.css';
const Team = ({team}) => {
    let playerSalary= team.reduce((total, cur) => total + cur.salary , 0);
    return (
        <div>
                {
                    team.map((player) => {
                        return(
                            <div className="d-flex selected-players">
                                <li>{player.name}</li>
                                <li>${player.salary}</li>
                            </div>
                        )
                    })
                }
                <h4 className='total-budget'>Total Budget: <span className="budget">${playerSalary}</span></h4>
            </div>

    )
}

export default Team
