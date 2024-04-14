import React from 'react'
import "./cartdialog.css"
import Card from './Card';

const CartDialog = ({ isOpen, onClose, children,selectedPrice  }) => {
    if (!isOpen) return null;
 
    
    let price=selectedPrice.split("/")
    let amount=parseInt(price[0])
    

    return (
      <div className="dialog-overlay">
        <div className="dialog">
          <button className="close-button" onClick={onClose}>X</button>
          <div className="dialog-content">
            <Card children={children} price={selectedPrice}/>
          </div>
        </div>
      </div>
    );
}

export default CartDialog