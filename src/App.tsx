import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/App.scss';

import GUI from './components/GUI/GUI';

const App = () => (
    <div className="App">
        <Routes>
            <Route path="/" element={ <h2>Welcome to Home!</h2> } />
            <Route path="GUI" element={ <GUI /> } />
        </Routes>
    </div>
);

export default App;
