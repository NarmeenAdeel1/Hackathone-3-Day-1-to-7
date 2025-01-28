import Header from "../../components/header";
import Footer from "../../components/footer";
import Image from "next/image"
import { FaTruck, FaCheckCircle, FaEnvelope, FaLeaf } from "react-icons/fa"; // React Icons library


export default function About(){
    return (
        <div>
            <Header/>


        <div className="flex justify-center gap-4">
  <div 
    className="w-[540px] h-[478px] bg-[#2c2750] p-[64px_75px_54px_64px] text-gray-200"
  >
    <h1 className=" font-clash text-clash-24 mb-4">It started with a small idea</h1>
    <p className="text-sm font-extralight">
    A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014    </p>
    <button
            className="bg-gray-500 text-black font-satoshi font-bold absolute left-28 rounded w-[200px] mt-36"
            style={{
              width: "200px", // Increased Width
              height: "60px", // Increased Height
              fontSize: "16px", // Adjusted Font Size
              lineHeight: "24px", // Correct Line Height
              fontWeight: 400, // Medium Font Weight
            }}
          >
            View Collection
          </button>
  </div>
  <div 
    className="w-[630px] h-[478px] bg-cover bg-center">
       {   <Image
                src="/yellowsofa.jpg"
                alt="Yellow Sofa"   width={540}
                height={478}
              />}
  </div>
</div>





<div className="flex justify-center gap-4">
  {/* <!-- Image Section --> */}
  <div className="flex-1 bg-cover bg-center">  
    <Image
      src="/blacksofa.jpg"
      alt="Yellow Sofa"
      width={800}
      height={300}  
      className="object-cover w-full h-[500px]"
    />
  </div>

  {/* <!-- Content Section --> */}
  <div className="flex-1 h-auto bg-slate-50 p-[64px_75px_54px_64px] text-black">
    <h1 className="font-clash text-clash-32 mb-4">The Dandy Chair</h1>
    <h2 className="font-medium text-clash-16">£250</h2>

    <div className="mt-16">
      <h1>Description</h1>
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
  </div>
</div>




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