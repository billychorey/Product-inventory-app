// AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Mens from '../pages/Mens';
import Womens from '../pages/Womens';
import Products from '../pages/Products';
import Newproducts from '../pages/Newproducts';
import Error from '../pages/Error';

const AppRoutes = ({
  items,
  mensItems,
  womensItems,
  otherItems,
  handleAddNewItem,
  handleUpdateQuantity,
  successMessage,
}) => {
  return (
    <Routes>
      <Route path="/" element={<Home items={items} handleUpdateQuantity={handleUpdateQuantity} successMessage={successMessage}/>} />
      <Route path="/mens" element={<Mens mensItems={mensItems} />} />
      <Route path="/womens" element={<Womens womensItems={womensItems} />} />
      <Route path="/products" element={<Products otherItems={otherItems} />} />
      <Route
        path="/addnewproducts"
        element={<Newproducts otherItems={otherItems} handleAddNewItem={handleAddNewItem} handleUpdateQuantity={handleUpdateQuantity}/>}
      />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;

//move back to app
//get rid of nested objects in db