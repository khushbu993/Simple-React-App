import React from 'react';
import './Club.css'

const Club = (props) => {
    // destructure
    const { name, image, salary } = props.clubPlayer;

    return (
        <div className="club">
            <div className="club-Players">
                <img src={image} alt="" />
                <h6>{name}</h6>
                <p><small><b>Salary: BDT {salary}</b></small></p>
            </div>
        </div>
    );
};

export default Club;