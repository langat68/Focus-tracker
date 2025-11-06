// FocusInput.tsx
import React from 'react';
import './FocusInput.scss';

const FocusInput: React.FC = () => {
    return (
        <div className="focus-input">
            <input
                type="text"
                placeholder="What are you focusing on today?"
            />
        </div>
    );
};

export default FocusInput;