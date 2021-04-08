import React, { useEffect, useState } from 'react'
import './PlayersInfo.css';
import PlayersData from '../../playersinfo.json';
import Player from '../Player/Player';
import Team from '../Team/Team';
const PlayersInfo = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [players , setPlayers] = useState([]);
    const [team, setTeam] = useState([]);
    const selectPlayer = (players) => {
        const newTeam = [...team, players]
        setTeam(newTeam)
        console.log(newTeam);
        setIsSelected(true)
    }
    useEffect(() => {
        setPlayers(PlayersData);
    }, [])
    return (
        <div className='container'>
            <div className="info-container d-flex row pb-5">
                <div className="player-container col-md-8 grid-area">
                    {
                        players.map((player) => <Player id={player.id}
                        selectPlayer = {selectPlayer}
                        player = {player} 
                        
                        />)
                    }
                </div>
                <div className="buy-area col-md-4">
                    <div className="team-container">
                        <h3 className='title'>Your Selected {team.length > 1 ? 'Players': 'Player'}: {team.length} </h3>
                        <Team team = {team} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayersInfo
