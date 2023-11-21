import React from 'react';

function Item(title, image, price, quantity) {

    return(
        <div>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <span className='bold'>${price}</span>
            <p className='quantity'>Quantity in stock: {quantity}</p>
        </div>
    )
}

export default Item;