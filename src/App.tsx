import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from './components/navbar';
import Hero from './components/hero';
import ProductPreview from './components/productPreview';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center items-center flex-col'>
      <Navbar />
      <Hero />
      <ProductPreview />
    </div>
  );
}

export default App;
