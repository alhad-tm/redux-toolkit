import { Fragment } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ProductList2 from './components/ProductList2/ProductList2';
// import Items from './api/Items';

function App() {
  return (
    <div className="App">
       <Fragment>
        <Header/>
        items
        {/* <ProductList/> */}
        {/* <Items/> */}
        <ProductList2/> 
       </Fragment>
    </div>
  );
}

export default App;
