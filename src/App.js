import Navbar from './components/Navbar';
import AppRoutes from './components/AppRoutes';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [items, setItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/items')
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
    fetch('http://localhost:3000/items', {
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
  
  const handleUpdateQuantity = (id, updatedQuantity) => {
    fetch(`http://localhost:3000/items/${id}`, {
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
          prevItems.map((item) =>
            item.id === id ? { ...item, quantity: updatedQuantity } : item
          )
        );
      })
      .catch((error) => {
        console.error('An error occurred while updating quantity', error);
      });
  };

  return (
    <>
      <Navbar />
      <AppRoutes 
        items={items}
        mensItems={mensItems}
        womensItems={womensItems}
        otherItems={otherItems}
        handleAddNewItem={handleAddNewItem}
        handleUpdateQuantity={handleUpdateQuantity}
        successMessage={successMessage}
      />
    </>
  );
}

export default App;
