import React from 'react';
import './App.css';
import furry from './images/furry.png';
import coin from './images/coin.png';

const state =
{
    // key: value
    grid:
    {
        width: 10,
        height: 10
    },

    furry:
    {
        x: 6,
        y: 0
    },

    coin:
    {
        x: 1,
        y: 0
    },
    direction : "right"
}


function App() {
    return (
        <div className="App">
            {[...Array(state.grid.width)].map((x, i) =>
                <div className="row" key={i}>

                    {[...Array(state.grid.height)].map((x, j) =>
                        <div className="cell" key={j}>

                            {state.furry.x === j && state.furry.y === i &&
                                <img src={furry} alt="furry"></img>
                            }
                            {state.coin.x === j && state.coin.y === i &&
                                <img src={coin} alt="coin"></img>
                            }

                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;

