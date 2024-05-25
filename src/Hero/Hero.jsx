
import React, { useState } from 'react'
import './Hero.css'
const Hero = () => {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const handleChange = (evt) => {
    setFormData((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };
  return (
    <div className='arz'>
        <h1>India's Largest Wedding Services Marketplace</h1>
        <h3>Hire best vendors such as <span>photographers</span>, <span>makeup</span> <span>artists</span>, Mandap, Caterers and so on</h3>
    <form >
    <label htmlFor="quantity">Product</label>
      <input
        type="text"
        placeholder="Vendor"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      <label htmlFor="quantity">Quantity</label>
      <input
        type="number"
        placeholder="City"
        name="quantity"
        id="quantity"
        onChange={handleChange}
        value={formData.quantity}
      />
      <button>Add Item</button>
    </form>
    </div>
  )
}

export default Hero
