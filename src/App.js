import React, { useState, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Products from './pages/Products';
import Newproducts from './pages/Newproducts';
import Error from './pages/Error';
import Navbar from './components/Navbar';


function App() {
  const [items, setItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then(res => res.json())
      .then(items => {
        setItems(items);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const mensItems = items.filter(item => item.category === "mens");
  const womensItems = items.filter(item => item.category === "womens");
  const otherItems = items.filter(item => item.category !== "mens" && item.category !== "womens")
  
  const handleAddNewItem = (newItem) => {
    fetch('http://localhost:3001/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Error updating database: ' + res.statusText);
        }
      })
      .then((addedItem) => {
        setItems((prevItems) => [...prevItems, addedItem]);
        setSuccessMessage('Item added to inventory!');
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error handling new item:', error);
      });
  };
  
  const updateItemQuantity = (prevItems, id, updatedQuantity) => {
    return prevItems.map((item) =>
      item.id === id ? { ...item, quantity: updatedQuantity } : item
    );
  };
  
  const handleUpdateQuantity = (id, updatedQuantity) => {
    fetch(`http://localhost:3001/items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: updatedQuantity }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to update quantity: ' + res.statusText);
        }
      })
      .then(() => {
        setItems((prevItems) =>
          updateItemQuantity(prevItems, id, updatedQuantity)
        );
      })
      .catch((error) => {
        console.error('An error occurred while updating quantity', error);
      });
  };

  const handleRemoveItem = (id) => {
    fetch(`http://localhost:3001/items/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => handleDeleteFromFrontEnd(id))
  }

  const handleDeleteFromFrontEnd = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home items={items} handleUpdateQuantity={handleUpdateQuantity} successMessage={successMessage} handleRemoveItem={handleRemoveItem}/>} />
        <Route path="/mens" element={<Mens mensItems={mensItems} />} />
        <Route path="/womens" element={<Womens womensItems={womensItems} />} />
        <Route path="/products" element={<Products otherItems={otherItems} />} />
        <Route
          path="/addnewproducts"
          element={<Newproducts otherItems={otherItems} handleAddNewItem={handleAddNewItem} handleUpdateQuantity={handleUpdateQuantity} />}
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
