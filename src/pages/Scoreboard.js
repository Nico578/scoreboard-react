import React from 'react';
import Navigation from '../components/Navigation';
import ChooseTeam from '../components/ChooseTeam';

const Scoreboard = () => {
    return (
    
        <div className='scoreboard'>
            <Navigation />
            <h1>Tableau des scores</h1>
            <ChooseTeam />
        </div>
    );
};

export default Scoreboard;