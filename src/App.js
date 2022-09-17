import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./style/index.scss";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Scoreboard from './pages/Scoreboard';
import Team from './pages/Team';

const App = () => {
    return (
        <div className='app'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Home />} />
                    <Route path='/Scoreboard' element={ <Scoreboard />} />
                    <Route path='/Teams' element={ <Team />} />
                    <Route path='/About' element={ <About />} />
                    <Route path='/Contact' element={ <Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;