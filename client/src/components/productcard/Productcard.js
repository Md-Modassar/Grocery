import React, { useEffect, useState } from 'react'
import data from "../data/data"
import CartDialog from '../cartDialog/CartDialog'

const Productcard = ({ele,index}) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [openDialogIndex, setOpenDialogIndex] = useState(-1);
    const [count,setCount]=useState(1)
    console.log(ele,"====ele" )

    useEffect(() => {
        const initialSelectedOptions = data.map((ele) => ele.price[0] || ''); // Get the first price value or an empty string if price array is empty
        setSelectedOptions(initialSelectedOptions);
      }, []);

    const handleChange = (event, index) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = event.target.value;
        setSelectedOptions(newSelectedOptions);
      };
    
      const openDialog = (index) => {
        setOpenDialogIndex(index);
      };
    
      const closeDialog = () => {
        setOpenDialogIndex(-1);
      };
     
  return (
    <>
    <div className='produt-cart'>
    <img src={ele.image} alt='' />
    <span className='name'>{ele.name}</span>
    <select value={selectedOptions[index]} onChange={(event) => handleChange(event, index)} className='selecter'>
     <option value="">Select your need</option>
       {/* Map over the price array to generate options dynamically */}
      {ele.price.map((option, priceIndex) => (
       <option key={priceIndex} value={option}>{option}</option>
            ))}
   </select>
   <span className='price'>{selectedOptions[index]}</span>
    <button  onClick={() => openDialog(index)}>Add to Cart</button>
    
   
</div>
{openDialogIndex !== -1 && (
                    <CartDialog isOpen={true} onClose={closeDialog} children={data[openDialogIndex]} selectedPrice={selectedOptions[openDialogIndex]} count={count} setCount={setCount}>
                    
                     
                     
                    </CartDialog>
                  )}

</>
 
  )
}

export default Productcard