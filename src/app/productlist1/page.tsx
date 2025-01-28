import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image"
import { FaTruck, FaCheckCircle, FaEnvelope, FaLeaf } from "react-icons/fa"; // React Icons library
import Prodcuts from "../../components/products";
import { fromJSON } from "postcss";
export default function ProductList1 (){
    return (
        <div>
            <Header />



        <div className="flex justify-center gap-4">
        <div 
    className=" bg-cover bg-center">
       {   <Image
                src="/blackchair.jpg"
                alt="Yellow Sofa"   width={800}
                height={0}
                className="object-cover"
              />}
  </div>


  <div 
    className="w-[800] h-[] bg-slate-50 p-[64px_75px_54px_64px] text-black"
  >
    <h1 className=" font-clash text-clash-32 mb-4">The Dandy Chair</h1>
    <h2 className="font-medium text-clash-16 ">
£250 </h2>

<div className="mt-16">
  <h1> Description </h1>
  <p className="font-satoshi text-satoshi-[12] mt-6">
    A timeless design, with premium materials features as one of our most <br />
    popular and iconic pieces. The dandy chair is perfect for any <br />
     stylish living space with beech legs and lambskin leather upholstery.
  </p>
   <ul className="list-disc mt-6 ml-6 font-thin">
    <li>Premium material</li>
    <li>Handmade upholstery</li>
    <li>Quality timeless classic</li>
  </ul>
</div>

<h1 className="font-clash text-clash-14 mt-14">
  Dimensions
</h1>

 <div className="display: flex; justify-content: space-between;">
      <span>Height:</span>
      <span>110cm</span>
    </div>
    <div className="display: flex; justify-content: space-between;">
      <span>Width:</span>
      <span>75cm</span>
    </div>
    <div className="display: flex; justify-content: space-between;">
      <span>Length:</span>
      <span>50cm</span>
    </div>

  </div>
</div>






<Prodcuts />






      <div
      className="bg-[#F8F8F8] py-10 px-4"
      style={{ maxWidth: "1200px", margin: "auto" }} // Centered container
    >
      {/* Main Heading */}
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-8">
        What makes our brand different
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="text-center bg-white p-6 shadow-lg rounded">
          <FaTruck size={48} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            Next Day As Standard
          </h3>
          <p className="text-sm text-gray-600 mt-2">
          Order before 3pm and get your order the next day as standard          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center bg-white p-6 shadow-lg rounded">
          <FaCheckCircle size={48} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
          Made by true artisans
          </h3>
          <p className="text-sm text-gray-600 mt-2">
          Handmade crafted goods made with
          real passion and craftmanship
          </p>
        </div>

        {/* Card 3 */}
        <div className="text-center bg-white p-6 shadow-lg rounded">
          <FaEnvelope size={48} className="text-orange-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
          Unbeatable prices          </h3>
          <p className="text-sm text-gray-600 mt-2">
          For our materials and quality you won’t find better prices anywhere          </p>
        </div>

        {/* Card 4 */}
        <div className="text-center bg-white p-6 shadow-lg rounded">
          <FaLeaf size={48} className="text-green-700 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
          Recycled packaging          </h3>
          <p className="text-sm text-gray-600 mt-2">
          We use 100% recycled packaging to ensure our footprint is manageable          </p>
        </div>
      </div>
    </div>




    <div className="font-clash text-[2A254B] align-[center] text-center">
    <h1 className="font-clash text-clash-32 ">
    Join the club and get the benefits
    </h1>
    <p className=" font-satoshi text-satoshi-16 text-center">
    Sign up for our newsletter and receive exclusive offers on <br /> new ranges, sales, pop up stores and more
    </p>
    <div className="text-white w-full sm:w-auto">
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
                Sign up
              </button>
            </div>
          </div>

</div>

<Footer/>

        </div>
    )
}