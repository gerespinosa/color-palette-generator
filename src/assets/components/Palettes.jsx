import React, { useState, useEffect } from 'react';

export const Palettes = () => {
    const [allCodes, setAllCodes] = useState([]);
    const [savedPalettes, setSavedPalettes] = useState([]);

    useEffect(() => {
        const codeText = document.querySelectorAll('.codetext');
        const allCodesArray = [];
        codeText.forEach(codeTextColor => {
            allCodesArray.push(codeTextColor.innerText);
        });
        setAllCodes(allCodesArray);
    }, [allCodes]);

    const handleSavePalette = () => {
        if (allCodes.length > 0) {
            setSavedPalettes(prevPalettes => [...prevPalettes, allCodes]);
        }
    };

    return (
        <div className='flex flex-col w-full justify-center'>
            <div className='flex-1 flex justify-center items-center'>
                <div
                    className='flex border-4 border-white'
                    onClick={handleSavePalette}
                >
                    {allCodes.map((colorCode, index) => (
                        <div
                            key={index}
                            className='w-12 h-12'
                            style={{ backgroundColor: colorCode }}
                        ></div>
                    ))}
                </div>
            </div>
            <div className='flex-1 flex flex-wrap h-fit w-full mx-auto justify-center items-center p-4'>
                {savedPalettes.map((palette, index) => (
                    <div key={index} className='flex border-4 border-white mb-2'>
                        {palette.map((colorCode, colorIndex) => (
                            <div
                                key={colorIndex}
                                className='w-6 h-8'
                                style={{ backgroundColor: colorCode }}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
