import React from 'react';
import './App.css'

const App: React.FC = () => {
    return (
        <div className='app'>
            <div className='headline'>
                <h1>Compound Component Tutorial</h1>
            </div>
            <div className='container'>
                <div>
                    <h2>Parameterized Accordion</h2>
                    {/*Hier sollte am Ende die parametrisierte component eingebunden werden*/}
                </div>
                <div>
                    <h2>Compound Accordion</h2>
                    {/*Hier sollte am Ende die compound component eingebunden werden.*/}
                </div>
            </div>
        </div>
    );
}

export default App;
