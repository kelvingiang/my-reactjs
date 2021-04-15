import React, { useState } from 'react';

function getRamdomColor() {
    const COLOR_LIST = ['black', 'yellow', 'blue', 'pink', 'red'];
    const ramdomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[ramdomIndex];
}

function MyBox() {

    const [bgColor, setbgColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'black';
        return initColor;
    });

    function changColor() {

        const newColor = getRamdomColor();
        setbgColor(newColor);

        localStorage.setItem('box_color', newColor)
    }

    return (
        <div
            onClick={changColor}
            style={{ cursor:'pointer', transition:'all 0.35s ease-in-out 0s', background: bgColor, border: '0.2rem #999 solid', width: '200px', margin: '2rem', height: '200px', borderRadius: '0.5rem' }}>
        </div>
    )
}



export default MyBox;