import React from 'react'

function Other({otherItems}) {
    return(
        <div className='centercolumn'>
           
            <h1>Products</h1>
            <ul className='productslist'>
                {
                    otherItems.map((item) => {
                        return(
                            <li key={item.id}>
                                {/* products */}
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

export default Other;
