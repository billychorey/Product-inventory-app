import React from 'react';

function Mens({mensItems}) {

    return (
        <div className='centercolumn'>
            <h1>Men's</h1>
            <ul className='productslist'>
                {
                    mensItems.map((item) => {
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
export default Mens;