import React from 'react';
import Item from '../components/Item';

function Other({otherItems}) {
    return(
        <div className='centercolumn'>
           
            <h1>Products</h1>
            <ul className='productslist'>
                {
                    otherItems.map((item) => {
                        return(
                            <li key={item.id}>
                                <Item />
                            </li>
                        )
                    })
                }
            </ul>
        </div>   
    )
}

export default Other;
