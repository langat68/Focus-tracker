// Timer.tsx
import React from 'react';
import './Timer.scss';

const Timer: React.FC = () => {
    return (
        <div className="timer">
            <div className="timer__display">
                00:00
            </div>
            <div className="timer__controls">
                <button>Start</button>
                <button>Pause</button>
                <button>Reset</button>
            </div>
        </div>
    );
};

export default Timer;