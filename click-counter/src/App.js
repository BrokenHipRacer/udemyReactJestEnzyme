import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [count, setCount] = React.useState(0);
    const [countZeroError, setCountZeroError] = React.useState(0);

    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">
                The counter is currently&nbsp;
                <span data-test="count">{count}</span>
            </h1>
            { countZeroError === 1 &&
                <h2 data-test="count-zero-error">
                    The counter is zero and cannot go below zero
                </h2>
            }
            <button
                data-test="increment-button"
                onClick={() => {
                    setCountZeroError( countZeroError - 1);
                    setCount(count + 1);
                }}
            >Increment counter</button>
            <button
                data-test="decrement-button"
                onClick={() => {
                    if (count === 0) {
                        setCountZeroError(countZeroError + 1);
                    } else {
                        setCount(count - 1);
                    }
                }}
            >Decrement counter</button>
    </div>
  );
}

export default App;
