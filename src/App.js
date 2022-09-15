
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {  BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductContainer from './components/ProductContainer';
import ProductDetail from './components/ProductDetail';



function App() {
  return (
    <BrowserRouter>
      <NavBar title="E-commerce" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductContainer />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
