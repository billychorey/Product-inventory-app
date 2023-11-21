import React from 'react';
import Item from '../components/Item'

function Womens({womensItems}) {

    return (
        <div className='centercolumn'>
            <h1>Women's</h1>
            <ul className='productslist'>
                {
                    womensItems.map((item) => {
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

export default Womens;