'use client';

import React, { useState } from 'react';
import {FaFacebook} from "react-icons/fa"
import { RxInstagramLogo } from "react-icons/rx";
import {FaLinkedin } from "react-icons/fa"


function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendEmail = () => {
    if (!email.includes("@")) {
      setMessage("❌ Please enter a valid email address.");
    } else {
      setMessage("✅ You have successfully subscribed!");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <div className="bg-gray-100 py-16 text-gray-600">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* First Section */}
        <div>
          <h1 className="text-[#151875] text-3xl font-bold mb-4">Hekto</h1>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 text-sm outline-none"
            />
            <button
              onClick={handleSendEmail}
              className="bg-[#FB2E86] text-white px-4 py-2 text-sm font-medium hover:bg-pink-700 transition-colors"
            >
              Sign Up
            </button>
          </div>
          {message && (
            <p className={`mt-2 text-sm ${message.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}
          <p className="mt-4 text-gray-500">Contact Info</p>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>

        {/* Second Section */}
        <div>
          <h2 className="text-[#151875] text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Third Section */}
        <div>
          <h2 className="text-[#151875] text-xl font-semibold mb-4">Customer Care</h2>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Order History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div>
          <h2 className="text-[#151875] text-xl font-semibold mb-4">Pages</h2>
          <ul className="space-y-2">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#E7E4F8]  ">
    <div className="container px-5  h-[80px] sm:h-[53px] mx-auto flex items-center sm:flex-row flex-col">
      
    <p className="text-sm text-[#9DA0AE] sm:ml-6 sm:mt-0 mt-4">
        © 2024 Hekto —
        <a
          href="https://twitter.com/knyttnev"
          rel="noopener noreferrer"
          className="text-[#9DA0AE] ml-1"
          target="_blank"
        >
          @Right Reserved
        </a>
      </p>
      <span className="flex flex-row sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

     <div className="w-5 h-5 " ><a href="#"><FaFacebook  /></a></div> 
      <div className="w-5 h-5  ml-3 text-gray-900"><a href="#"><RxInstagramLogo /></a></div>
        <div className="w-5 h-5  ml-3 text-gray-900"><a href="#"><FaLinkedin  /></a></div>

    </span>
    </div>
  </div>

      
        </div>
    );
  };
  
  export default Footer;


 