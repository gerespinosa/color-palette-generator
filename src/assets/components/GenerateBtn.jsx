export const GenerateBtn = () => {

    const simulateSpacebarPress = () => {
        const event = new KeyboardEvent('keydown', { key: ' ' });
        window.dispatchEvent(event);
    };

    return (
        <button className="hidden md:flex gap-2 h-auto w-fit items-center justify-center p-2 rounded shadow-md shadow-gray-700 hover:bg-gray-300 transition bg-gray-200"
            onClick={simulateSpacebarPress}>
            <i className="fa-solid fa-arrows-rotate"></i>Generate
        </button>
    )
}
