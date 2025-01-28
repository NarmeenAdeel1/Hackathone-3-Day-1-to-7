import Image from 'next/image'
import React from 'react'

const Prodcuts = () => {
  return (
    <div>
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
                        src="/dandychair.jpg"
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
                        src="/silkyvase.jpg"
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
                        src="/rusticvase.jpg"
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
                        src="/luckylamp.jpg"
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
          </div>
  )
}

export default Prodcuts