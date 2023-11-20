import React, {useState} from 'react';

function ProductItem({ item, handleUpdateQuantity}) {
 
    const [quantity, setQuantity] = useState(item.quantity);
  
    const handleChange = (e, itemId) => {
      setQuantity(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleUpdateQuantity(item.id, quantity);
    };
  
    return (
        <li>
            <div>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <span className='bold, price'>${item.price}</span>
                <span className='bold'>Quantity in stock: {item.quantity}</span>
                <form className='inventoryform'
                onSubmit={handleSubmit}>
                    <label className='quantitylabel'>Update inventory:</label>
                    <input
                    className='quantityinput'
                    placeholder={item.quantity}
                    value={quantity}
                    onChange={handleChange}
                    />
                    <input type='submit' />
                </form>
            </div>
        </li>
    );
  }
  

export default ProductItem;