import React from 'react';

// render an SVG element displaying a right-facing arrow
const PlayButton = () => {
    return (
      <svg viewBox="0 0 100 100">
        <path d="M 30 20 L 80 50 L 30 80Z"/>
      </svg>
    );
}

export default PlayButton;
