import React from 'react';
import ChiangMuanMap from './MapComponent';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>แผนที่เชียงม่วน</h1>
            <ChiangMuanMap />
        </div>
    );
};

export default App;
