import React from 'react'

export const Alert = () => {
    return (
        <div id='alert' className='min-w-64 h-fit bg-blue-200 text-blue-500 p-2 items-center justify-center gap-2 rounded-md absolute right-0 bottom-10 hidden'>
            <i className="fa-regular fa-circle-check"></i><h1>Copied to clipboard</h1>
        </div>
    )
}
