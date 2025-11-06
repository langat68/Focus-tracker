// DailyLog.tsx
import React from 'react';
//import './DailyLog.scss';

const DailyLog: React.FC = () => {
    return (
        <div className="daily-log">
            <h2 className="daily-log__title">Today's Focus Sessions</h2>
            <div className="daily-log__list">
                {/* Log items will go here */}
            </div>
            <div className="daily-log__total">
                Total Focus Time: 00:00
            </div>
        </div>
    );
};

export default DailyLog;