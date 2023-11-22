import React from 'react';

function Item({ title, image, price, quantity }) {
  return (
    <div>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <span className='bold'>${price}</span>
        <p className='quantity'>Quantity in stock: {quantity}</p>
    </div>
  );
}

export default Item;