import React from 'react';
import Navigation from '../components/Navigation';
import Teams from '../components/Teams';

const Team = () => {
    return (
        <div className='team'>
            <Navigation />
            <h1>Les équipes</h1>
            <Teams />
        </div>
    );
};

export default Team;