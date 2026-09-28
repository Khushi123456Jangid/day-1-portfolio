import { useState } from 'react'
import './App.css'
import {FaShoppingCart} from 'react-icons/fa'
import ProductCard from './components/ProductCard'

function App() {
  let [cartCount,setCartCount]=useState(0);
  function addToCart(){
    setCartCount(cartCount+1);
  }
  return(
    <main className='app'>
      <header className='header'>
        <div>
          <p className='eyebrow'>DAY 23 REACT</p>
          <h1>Mini Shopping Store</h1>
        </div>
        <div className='cart'>
          <FaShoppingCart size={17}/> Cart: <strong>{cartCount}</strong>
        </div>
      </header>
      <section className='product-grid'>
        <ProductCard
          name="Laptop"
          price={55000}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nyj85QkHtYOU81C089iywJQAke_H3GbWd0jI1iv-9Q&s=10"
          onAdd={addToCart}
        />
        <ProductCard 
          name="Headphones"
          price={3500}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsuHAJCW-qz5sZZQS8fORe9zNEXzjZm9WTJerrJwOx1A&s=10"
          onAdd={addToCart}
        />
        <ProductCard
          name="Keyboard"
          price={2200}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IqO_InL3McslNhcwCkPtOgLo7dixOTjASWXPZjUCfA&s=10"
          onAdd={addToCart}
        />
      </section>
    </main>
  );
}

export default App
