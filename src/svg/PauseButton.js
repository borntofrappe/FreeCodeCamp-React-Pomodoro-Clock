import React from 'react';

// render an SVG element displaying two rectangles one next to the other
const PauseButton = () => {
    return (
      <svg viewBox="0 0 100 100">
        <rect x="25" y="25" width="15" height="50"/>
        <rect x="60" y="25" width="15" height="50"/>
      </svg>
    );
}

export default PauseButton;


