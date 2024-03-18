import React from 'react';

const GenericButton = ({ onClick, data, name }) => {
  const handleClick = () => {
    // Pass the data to the onClick handler when the button is clicked
    onClick(data);
  };

  return (
    <button onClick={handleClick}>{name}</button>
  );
};

export default GenericButton;
