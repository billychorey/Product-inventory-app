import React, {useState} from 'react';

function ProductItem({ item, handleUpdateQuantity, handleRemoveItem}) {
 
    const [quantity, setQuantity] = useState(item.quantity);
  
    const handleChange = (e, itemId) => {
      setQuantity(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      handleUpdateQuantity(item.id, quantity);
    };

    const handleClick = () => {
      const idToDelete = item.id;
      handleRemoveItem(idToDelete)
    }
  
    return (
        <li>
            <div>
                <img src={item.image} alt={item.title} />
                <h3 className='itemtitle'>{item.title}</h3>
                <span className='bold, price'>${item.price}</span>
                <span className='quantity'>Quantity in stock: {item.quantity}</span>
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
                <button 
                className='remove'
                onClick={handleClick}
                >
                  Remove
                </button>
            </div>
        </li>
    );
  }
  

export default ProductItem;