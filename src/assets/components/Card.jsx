import React, { useState, useEffect } from 'react';
import { getCode } from "../../services/getCode";

export const Card = ({ onUpdateCode }) => {
    const [newCode, setNewCode] = useState('#FFFFFF');

    const handleCode = () => {
        const code = getCode();
        setNewCode(code);
        if (onUpdateCode) {
            onUpdateCode(code);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === ' ') {
            e.preventDefault();
            handleCode();
        }
    }

    const handleCopy = (e) => {
        navigator.clipboard.writeText(newCode)
        const alert = document.getElementById('alert')
        setTimeout(() => {
            alert.classList.remove('copied')
        }, 2000)
        alert.classList.add('copied')

    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='bg-white rounded-md flex flex-col justify-around items-center h-fit p-2 gap-8 cursor-pointer'>
            <div
                style={{ backgroundColor: newCode }}
                className='h-56 w-48 border-0'
                onClick={handleCode}
            ></div>
            <h2 className='text-xl codetext'
                onClick={handleCopy}>{newCode}
            </h2>
        </div>
    );
};
