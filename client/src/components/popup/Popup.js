import React, { useState } from 'react';
import "./popup.css"

const Popup = ({value,h}) => {
  const [isOpen, setIsOpen] = useState(value);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    {isOpen &&(
        <div className='popup-container'>     
        <div className="popup">
          <div className="popup-content">
            <h2>{h}</h2>  
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>   
    </div>
    )}
    </>
  );
};

export default Popup;