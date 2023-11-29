import React, {useState, useEffect} from 'react';
import Search from '../components/Search';
import ProductItem from './ProductItem';

function Home({ items, handleUpdateQuantity, successMessage, handleRemoveItem }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  useEffect(() => {
    setSearchTerm('');
  }, [items]);

  return (
    <div className='centercolumn'>
        <div className='homeflexwrap'>
            <Search 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            />

            <div className='homecontent'>
              <p className='success'>{successMessage}</p>
              <h1>All Products</h1>
              <ul className='productslist'>
                {filteredItems.map((item) => (
                    <ProductItem 
                    key={item.id} 
                    item={item} 
                    handleUpdateQuantity={handleUpdateQuantity}
                    handleRemoveItem={handleRemoveItem}/>
                ))}
              </ul>
            </div>
        </div>
    </div>
  );
}

export default Home;
