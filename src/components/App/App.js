import {Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';
import ProductCard from '../ProductCard/ProductCard';
import Cart from '../Cart/Cart';
import './App.css';
import products from '../../utils/data.js';

import './App.css';


function App() {
 // const addedData = data.filter((data) => data.isInCart === true);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main products={products}/>
        </Route>
        <Route exact path="/cart">
          <Cart products={products}/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
