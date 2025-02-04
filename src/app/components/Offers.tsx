import React from 'react';

const Offers = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: "url('/bgimage.png')" }}
      >
        {/* Content on top of the background */}
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="text-center text-purple-900 px-6">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-6">Get Latest Update By Subscribe <br /> Our Newsletter</h2>

            {/* Shop Now Button */}
            <button className="bg-pink-600 text-white px-10 py-3 rounded-md hover:bg-pink-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* White Space for two lines */}
      <div className="my-12"></div>

      {/* Brand Image */}
      <div className="flex justify-center">
        <img src="bg.png" alt="Brand" className="w-full max-w-[800px] h-auto" />
      </div>
    </div>
  );
};

export default Offers