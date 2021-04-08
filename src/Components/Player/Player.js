import React, { useState } from 'react'
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
const Player = ({player, selectPlayer}) => {
    const {img, name , age, salary, batingStyle, bowlingStyle, role} = player ; 
    const [isSelect , setIsSelect] = useState(false)

    return (
        <div className='container'>
            <div className="single-player-card text-center">
                <img className='player-img' src={img} alt={img} />
                <div className="more-info">
                    <div className="d-flex justify-content-between">
                    <h4>Name: {name}</h4>
                    <h5>Age: {age}</h5>
                    </div>
                    <p className='position'>Position: {role}</p>
                    <div className="flex">
                        <p>Batting: {batingStyle}</p>
                        <p>Bowling: {bowlingStyle}</p>
                    </div>
                    <h4 className='price-info'>Salary : ${salary}</h4>

                    <button disabled={isSelect} onClick = {() => {
                        selectPlayer(player)
                        setIsSelect(true)
                    }} className="btn btn-block"> {isSelect ?<FontAwesomeIcon className='mr-1' icon={faCheck} /> : <FontAwesomeIcon className='mr-1' icon={faPlus} />}
                     {isSelect ? "Selected" : 'Select player'}</button>
                </div>
            </div>
        </div>
    )
}

export default Player
