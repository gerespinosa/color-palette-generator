import React, { useState } from 'react';
import { getCode } from "../../services/getCode";

export const Card = ({ onUpdateCode }) => {
    const [newCode, setNewCode] = useState('');

    const handleCode = () => {
        const code = getCode();
        setNewCode(code);
        onUpdateCode(code); 
    };

    return (
        <div
            className='bg-white rounded-md flex flex-col justify-around items-center h-fit p-2 gap-8'
            onClick={handleCode}
            onKeyDown={handleCode}
            tabIndex={0}
        >
            <div
                style={{ backgroundColor: newCode }}
                className='h-56 w-48 border-0'
            ></div>
            <h2 className='text-xl'>{newCode}</h2>
        </div>
    );
};
