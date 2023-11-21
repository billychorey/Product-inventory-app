import React, {useState} from 'react';


function Newproducts({handleAddNewItem}) {
    const [newItem, setNewItem] = useState( 
        {
            title: '',
            price: '',
            description: '',
            category: 'default',
            image: '',
            quantity: ''
        }
    )

    //assign to a variable

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prevNewItem) => ({
          ...prevNewItem,
          [name]: value,
        }));    

    }

    const handleSelect = (e) => {
        const selectedCategory = e.target.value;
        
        setNewItem((prevNewItem) => ({
            ...prevNewItem,
            category: selectedCategory,
        }));
    };

    const handleSubmit = (e) => {
        const { title, price, description, category, image, quantity } = newItem
        e.preventDefault();
        if (!title || !price || !description || category === 'default' || !image || !quantity) {
            alert('All fields must be filled in and a category must be selected.');
            return;
        } else {
            handleAddNewItem(newItem);
            setNewItem({
                title: '',
                price: '',
                description: '',
                category: 'default',
                image: '',
                quantity: ''
            });
        }
    };
      
    return (
        <div className='centercolumn'>
            <h1>Add additional inventory:</h1>
            <form onSubmit={handleSubmit}>
                <label>Product title:</label>
                <input
                onChange={handleChange}
                name={'title'}
                value={newItem.title}
                type="text"
                />
                <label>Product price:</label>
                <input
                onChange={handleChange}
                name={'price'}
                value={newItem.price}
                type="text"
                />
                <label>Product description:</label>
                <input
                onChange={handleChange}
                name={'description'}
                value={newItem.description}
                type="text"
                />
               <label>Product category:</label>
                <select
                className='select'
                onChange={handleSelect}
                name='category'
                value={newItem.category}
                >
                    <option value='default'>Select category</option>
                    <option value="mens">Men's</option>
                    <option value="womens">Women's</option>
                    <option value='other'>Other</option>
                </select>

        
                <label>Product image url:</label>
                <input
                onChange={handleChange}
                name={'image'}
                value={newItem.image}
                type="text"
                />
                <label>Product inventory count:</label>
                <input
                onChange={handleChange}
                name={'quantity'}
                value={newItem.quantity}
                type="text"
                />
                <input
                onChange={handleChange} type="submit" />
            </form>

            <ul>
                <li>shirt: 
                    <p>
                        https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg
                    </p>
                </li>
                <li>laptop: 
                    <p>
                        https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/apple_mbpm2_06_13_3_macbook_pro_with_1654597828_1710310.jpg                    
                    </p>
                </li>
                <li>Watches:
                    <p>
                        https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ultra-band-unselect-gallery-1-202309_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=1693544486108                    
                    </p>
                </li>
                <li>jacket:
                    <p>
                        https://m.media-amazon.com/images/I/717CkBjypqL._AC_SX679_.jpg
                    </p>
                </li>
                <li>hat:
                    <p>
                        https://m.media-amazon.com/images/I/71PO11NzkKL._AC_SX679_.jpg                    
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Newproducts;