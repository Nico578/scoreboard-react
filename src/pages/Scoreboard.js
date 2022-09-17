import React from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';
import Teams from '../components/Teams';

const Scoreboard = () => {
    return (
    
        <div className='scoreboard'>
            <Navigation />
            <h1>Les équipes</h1>
            <Teams />
        </div>
    );
};

export default Scoreboard;