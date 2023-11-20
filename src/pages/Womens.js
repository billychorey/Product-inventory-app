import React from 'react';

function Womens({womensItems}) {

    return (
        <div className='centercolumn'>
            <h1>Women's</h1>
            <ul className='productslist'>
                {
                    womensItems.map((item) => {
                        return(
                            <li key={item.id}>
                                <div>
                                    <h3>{item.title}</h3>
                                    <img src={item.image} alt={item.title} />
                                    <span className='bold'>${item.price}</span>
                                    <p className='quantity'>Quantity in stock: {item.quantity}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div> 
    )
}

export default Womens;