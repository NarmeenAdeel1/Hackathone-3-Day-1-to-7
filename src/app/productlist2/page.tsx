import Header from "../../components/header"
import Footer from "../../components/footer"
import Image from "next/image"
import Prodcuts from "../../components/products"

export default function ProductList2(){
    return (
        <div>
<Header/>
<div className="relative">
  <div className="w-full h-[203px] ml-auto">
    <img
      src="/pl2h.jpg"
      alt="Example"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="absolute bottom-4 left-4">
    <h1 className="font-clash text-gray-100 text-4xl">All Products</h1>
  </div>
</div>

<div className="w-[1440px] h-[64px] px-[24px] py-[8px] flex justify-between items-center gap-0 text-black">
  {/* <!-- Left Side: Filters --> */}
  <div className="flex gap-6">
    {/* <!-- Filter: Category --> */}
    <div className="flex items-center gap-2">
      <span>Category</span>
      <select className="border border-gray-300 rounded px-2 py-1">
        <option value="xyz1">1</option>
        <option value="xyz2">XYZ 2</option>
        <option value="xyz3">XYZ 3</option>
        <option value="xyz4">XYZ 4</option>
      </select>
    </div>
    {/* <!-- Filter: Product Type --> */}
    <div className="flex items-center gap-2">
      <span>Product Type</span>
      <select className="border border-gray-300 rounded px-2 py-1">
        <option value="xyz1">1</option>
        <option value="xyz2">XYZ 2</option>
        <option value="xyz3">XYZ 3</option>
        <option value="xyz4">XYZ 4</option>
      </select>
    </div>
    {/* <!-- Filter: Price  */}
    <div className="flex items-center gap-2">
      <span>Price</span>
      <select className="border border-gray-300 rounded px-2 py-1">
        <option value="xyz1">1</option>
        <option value="xyz2">XYZ 2</option>
        <option value="xyz3">XYZ 3</option>
        <option value="xyz4">XYZ 4</option>
      </select>
    </div>
     {/* Filter: Brand  */}
    <div className="flex items-center gap-2">
      <span>Brand</span>
      <select className="border border-gray-300 rounded px-2 py-1">
        <option value="xyz1">1</option>
        <option value="xyz2">XYZ 2</option>
        <option value="xyz3">XYZ 3</option>
        <option value="xyz4">XYZ 4</option>
      </select>
    </div>
  </div>

  {/* Right Side: Sort By --> */}
  <div className="flex items-center gap-2">
    <span>Sort By:</span>
    <select className="border border-gray-300 rounded px-2 py-1">
      <option value="new">New</option>
      <option value="old">Old</option>
      <option value="latest">Latest</option>
    </select>
  </div>
</div>





<Prodcuts />




            <div className="container mx-auto mt-10">
              <h1 className="text-2xl font-bold text-center mb-8">New Ceramics</h1>
    
              {/* Grid Container */}
              <div
                className="grid grid-cols-4 gap-6"
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                }}
              >
                {/* Item 1 */}
                <div className="text-center">
                  <div
                    className="bg-gray-200 w-full"
                    // style={{
                    //   height: "305px",
                    //   width: "305px",
                    // }}
                  >
                    {
                      <Image
                        src="/hanginglamp.jpg"
                        alt="The Dandy Chair"
                        width={280}
                        height={300}
                        className="w-full h-[350px]"
                      />
                    }
                  </div>
                  <p className="font-medium mt-4">The Dandy Chair</p>
                  <p className="text-gray-600">£250</p>
                </div>
    
                {/* Item 2 */}
                <div className="text-center">
                  <div
                    className="bg-gray-200 w-full"
                    // style={{
                    //   height: "305px",
                    //   width: "305px",
                    // }}
                  >
                    {
                      <Image
                        src="/whitevase.jpg"
                        alt="Rustic Vase"
                        width={280}
                        height={300}
                        className="w-full h-[350px]"
                      />
                    }
                  </div>
                  <p className="font-medium mt-4">The Silky Vase</p>
                  <p className="text-gray-600">£125</p>
                </div>
    
                <div className="text-center">
                  <div
                    className="bg-gray-200 w-full"
                    // style={{
                    //   height: "305px",
                    //   width: "305px",
                    // }}
                  >
                    {
                      <Image
                        src="/yellowstool.jpg"
                        alt="Rustic Vase"
                        width={280}
                        height={300}
                        className="w-full h-[350px]"
                      />
                    }
                  </div>
                  <p className="font-medium mt-4">Rustic Vase Set</p>
                  <p className="text-gray-600">£155</p>
                </div>
    
                {/* Item 4 */}
                <div className="text-center">
                  <div
                    className="bg-gray-200 w-full"
                    // style={{
                    //   height: "305px",
                    //   width: "305px",
                    // }}
                  >
                    {
                      <Image
                        src="/yellowchair.jpg"
                        alt="Rustic Vase"
                        width={280}
                        height={300}
                        className="w-full h-[350px]"
                      />
                    }
                  </div>
                  <p className="font-medium mt-4">The Lucy Lamp</p>
                  <p className="text-gray-600">£399</p>
                </div>
              </div>
            </div>




        
          <Prodcuts/>

                <button
            className="bg-[#494565] text-gray-50 font-satoshi font-medium rounded"
            style={{
              width: "160px", // Increased Width
              height: "60px", // Increased Height
              fontSize: "16px", // Adjusted Font Size
              lineHeight: "24px", // Correct Line Height
              fontWeight: 400, // Medium Font Weight
            }}
          >
            View Collection
          </button>

          <Footer/>
                        
        </div>
    )
}