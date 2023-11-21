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
                                <Item />
                            </li>
                        )
                    })
                }
            </ul>
        </div>   
    )
}
export default Mens;