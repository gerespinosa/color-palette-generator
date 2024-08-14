import React from 'react'

import { getAllCodes } from '../../services/getAllCodes'

export const Btn = () => {

    const handleCopyAll = () => { getAllCodes() }

    return (
        <button className="flex gap-2 h-auto w-fit items-center justify-center p-2 rounded shadow-md shadow-gray-700 hover:bg-gray-300 transition bg-gray-200"
            onClick={handleCopyAll}>
            <i className="fa-solid fa-layer-group"></i>Copy them all!
        </button>
    )
}
