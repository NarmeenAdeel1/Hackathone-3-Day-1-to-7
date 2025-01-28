import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image";
import React from 'react'

export default function Cart() {
  return (
    <div>
        <Header/>
        <div className="container mx-auto p-4">
  
  {/* <!-- Cart Section --> */}
  <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

    {/* <!-- Cart Item 1 --> */}
    <div className="flex justify-between items-center py-4 border-b">
      <div className="flex items-center">
        <img src="/silkyvase.jpg" alt="Product 1" className="w-[80px] h-[80px] object-cover mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Graystone vase</h3>
          <h4>A timeless ceramic vase with 
          a tri color grey glaze.</h4>
          <p className="text-gray-600">£50.00</p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-xl font-semibold px-2">-</button>
        <span className="mx-2">1</span>
        <button className="text-xl font-semibold px-2">+</button>
      </div>
      <p className="font-medium">£50.00</p>
    </div>

    {/* <!-- Cart Item 2 --> */}
    <div className="flex justify-between items-center py-4 border-b">
      <div className="flex items-center">
        <img src="/plant.jpg" alt="Product 2" className="w-[80px] h-[80px] object-cover mr-4" />
        <div>
          <h3 className="text-lg font-semibold">Basic white vase</h3>
          <h4>Beautiful and simple this is
          one for the classics</h4>
          <p className="text-gray-600">£80.00</p>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-xl font-semibold px-2">-</button>
        <span className="mx-2">1</span>
        <button className="text-xl font-semibold px-2">+</button>
      </div>
      <p className="font-medium">£80.00</p>
    </div>

    {/* <!-- Subtotal and Total --> */}
    <div className="flex justify-between items-center mt-4">
      <p className="font-semibold text-xl">Subtotal:</p>
      <p className="font-semibold text-xl">£130.00</p>
    </div>
    
    <div className="flex justify-between items-center mt-2">
      <p className="font-semibold text-xl">Total:</p>
      <p className="font-semibold text-xl">£130.00</p>
    </div>

    {/* <!-- Checkout Button --> */}
    <button className="bg-[#494565] text-white font-medium py-2 px-4 mt-4 rounded w-full">
      Proceed to Checkout
    </button>
  </div>
</div>

        <Footer/>
    </div>
  )
}
