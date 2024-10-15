"use client"
import Image from "next/image";
import { useState } from "react";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState("/img/tv-lg-first-image.png");

  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-1/3 w-full">
          <div className="mb-4 transition-transform duration-300 hover:scale-105">
            <Image 
              src={selectedImage} 
              alt="LG C2 42 4K Smart OLED" 
              width={600}  
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex lg:flex-col flex-row lg:space-y-4 space-x-4 lg:space-x-0">
            <Image 
              src="/img/tv-lg-first-image.png" 
              alt="LG C2 42 4K Smart OLED Thumbnail 1" 
              width={80} 
              height={80} 
              onClick={() => setSelectedImage("/img/tv-lg-first-image.png")}
              className={`w-20 h-20 object-cover border cursor-pointer border-gray-300 transition-all duration-200 hover:border-red-500 ${
                selectedImage === "/img/tv-lg-first-image.png" ? "border-red-500" : ""
              }`}
            />
            <Image 
              src="/img/tv-lg-second-image.png" 
              alt="LG C2 42 4K Smart OLED Thumbnail 2" 
              width={80} 
              height={80} 
              onClick={() => setSelectedImage("/img/tv-lg-second-image.png")}
              className={`w-20 h-20 object-cover border cursor-pointer border-gray-300 transition-all duration-200 hover:border-red-500 ${
                selectedImage === "/img/tv-lg-second-image.png" ? "border-red-500" : ""
              }`}
            />
            <Image 
              src="/img/tv-lg-third-image.png" 
              alt="LG C2 42 4K Smart OLED Thumbnail 3" 
              width={80} 
              height={80} 
              onClick={() => setSelectedImage("/img/tv-lg-third-image.png")}
              className={`w-20 h-20 object-cover border cursor-pointer border-gray-300 transition-all duration-200 hover:border-red-500 ${
                selectedImage === "/img/tv-lg-third-image.png" ? "border-red-500" : ""
              }`}
            />
            <Image 
              src="/img/tv-lg-fourth-image.png" 
              alt="LG C2 42 4K Smart OLED Thumbnail 4" 
              width={80} 
              height={80} 
              onClick={() => setSelectedImage("/img/tv-lg-fourth-image.png")}
              className={`w-20 h-20 object-cover border cursor-pointer border-gray-300 transition-all duration-200 hover:border-red-500 ${
                selectedImage === "/img/tv-lg-fourth-image.png" ? "border-red-500" : ""
              }`}
            />
          </div>
        </div>
        <div className="lg:w-2/3 w-full mt-8 lg:mt-0">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold mb-4">LG C2 42 (106CM) 4K Smart OLED evo TV | WebOS | Cinema HDR</h2>
          <div className="text-yellow-500 mb-4">
            <span className="inline-block">★ ★ ★ ★ ☆</span>
          </div>
            <span className="text-sm text-gray-500">Brand: <strong>LG</strong></span>
            <span className="text-sm text-gray-500">Model: <strong>OLED42C2PSA</strong></span>
            <span className="text-sm text-gray-500">Availability: <strong>Only 2 In Stock</strong></span>
          </div>
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Processor:</strong> α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</p>
            <p><strong>Display:</strong> Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</p>
            <p><strong>Voice Control:</strong> Hands-free Voice Control, Always Ready</p>
            <p><strong>HDR:</strong> Dolby Vision IQ, Dolby Atmos, Filmmaker Mode</p>
            <p><strong>Eye Comfort:</strong> Low-Blue Light, Flicker-Free</p>
          </div>
          <span>USD(incl. of all taxes)</span>
          <p className="text-lg mb-2 text-gray-700 line-through">$800.00</p>
          <p className="text-2xl text-red-500 mb-2">$600.72</p>
          <div className="flex space-x-2 mb-4">
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition w-full lg:w-auto">
              Buy Now
            </button>
            <button className="bg-gray-300 text-black px-6 py-3 rounded hover:bg-gray-400 transition w-full lg:w-auto">
              Add to Cart
            </button>
            <button>
              <span>-</span>
              <span>1</span>
              <span>+</span>
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Available Sizes</h3>
            <div className="flex space-x-2">
              <button className="border border-gray-300 px-4 py-2 rounded hover:border-red-500 transition">106 cm (42)</button>
              <button className="border border-gray-300 px-4 py-2 rounded hover:border-red-500 transition">121 cm (48)</button>
              <button className="border border-gray-300 px-4 py-2 rounded hover:border-red-500 transition">139 cm (55)</button>
              <button className="border border-gray-300 px-4 py-2 rounded hover:border-red-500 transition">164 cm (65)</button>
              <button className="border border-gray-300 px-4 py-2 rounded hover:border-red-500 transition">196 cm (77)</button>
              <button className="border border-gray-300 px-4 py-2 rounded hover:border-red-500 transition">210 cm (83)</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <ul className="flex space-x-4 border-b pb-2">
          <li className="cursor-pointer text-gray-700 hover:text-red-500">Description</li>
          <li className="cursor-pointer text-gray-700 hover:text-red-500">Specification</li>
          <li className="cursor-pointer text-gray-700 hover:text-red-500">Reviews</li>
        </ul>
        <div className="mt-4">
          <p className="text-gray-700">
            The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we&apos;ve tested.
            Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has
            many gaming-oriented features that are great for gamers.
          </p>
        </div>
      </div>
    </div>
  );
}