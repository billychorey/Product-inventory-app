import React from 'react';
import Item from '../components/Item'

function Mens({mensItems}) {

    return (
        <div className='centercolumn'>
            <h1>Men's</h1>
            <ul className='productslist'>
                {
                    mensItems.map((item) => {
                        return(
                            <li key={item.id}>
                                <Item 
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                quantity={item.quantity}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>   
    )
}
export default Mens;

//title, image, price, quantity