import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    // destructure
    const { name, image, salary } = props.player;
    const handleAddPlayers = props.handleAddPlayers;

    return (
        <div className='player'>
            <div className="player-content">
                <h4>Player: {name}</h4>
                <img src={image} alt="" />
                <p>Monthly Salary of <br></br><b>{name} : </b>BDT {salary} Taka</p>
                <button className="player-button" onClick={() => handleAddPlayers(props.player)}><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>
        </div>
    );
};

export default Player;