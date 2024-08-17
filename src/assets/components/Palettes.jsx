import React, { useState, useEffect } from 'react';

export const Palettes = () => {
    const [allCodes, setAllCodes] = useState([]);
    const [isOpened, setIsOpened] = useState(false)
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
            setSavedPalettes(prevPalettes => [...prevPalettes, [...allCodes]]);
        }
    };

    const handleZoomPalette = (paletteIndex) => {
        const selectedPallete = document.getElementById(`palette${paletteIndex}`);
        if (selectedPallete && isOpened == false) {
            selectedPallete.classList.add('modal');
            setIsOpened(true)
        } else {
            setIsOpened(false)
            selectedPallete.classList.remove('modal')
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
                        >
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex-1 flex flex-wrap h-fit w-full mx-auto justify-center items-center p-4'>
                {savedPalettes.map((palette, paletteIndex) => (
                    <div
                        key={paletteIndex}
                        className='flex border-4 border-white mb-2 cursor-pointer'
                        id={`palette${paletteIndex}`}
                        onClick={() => handleZoomPalette(paletteIndex)}
                    >
                        {palette.map((colorCode, colorIndex) => (
                            <div
                                key={colorIndex}
                                className={`w-12 h-12 ${isOpened == false ? 'hover:scale-125' : 'hover:scale-x-200'} hover:text-white overflow-x-hidden flex justify-center items-center`}
                                style={{ backgroundColor: colorCode }}
                            >
                                <p className={`opacity-100 text-xs`}>{colorCode}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};
