import React, {useState, useEffect} from 'react';
import Search from './Search';
import ProductItem from './ProductItem';

function Home({ items, handleUpdateQuantity, successMessage }) {
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleFilter = (term) => {
    const trimmedTerm = term.trim();
    if (trimmedTerm === '') {
      setFilteredItems(items); 
    } else {
      const filtered = items.filter((item) =>
        item.title.toLowerCase().includes(trimmedTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  };

  
  return (
    <div className='centercolumn'>
        <div className='homeflexwrap'>
            <Search 
            handleFilter={handleFilter}
            />

            <div className='homecontent'>
              <p className='success'>{successMessage}</p>
              <h1>All Products</h1>
              <ul className='productslist'>
                {filteredItems.map((item) => (
                    <ProductItem 
                    key={item.id} 
                    item={item} 
                    handleUpdateQuantity={handleUpdateQuantity}/>
                ))}
              </ul>
            </div>
        </div>
    </div>
  );
}

export default Home;
