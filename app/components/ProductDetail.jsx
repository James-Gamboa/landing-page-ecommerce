"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState("/img/tv-lg-first-image.png");

  return (
    <div className="container mx-auto p-8 lg:flex lg:space-x-8">
      <div className="lg:w-1/3 w-full lg:flex lg:flex-col">
        <div className="flex">
          <div className="flex flex-col space-y-4 mr-4">
            <Image
              src="/img/tv-lg-first-image.png"
              alt="LG C2 42 4K Smart OLED Thumbnail 1"
              width={60}
              height={60}
              onClick={() => setSelectedImage("/img/tv-lg-first-image.png")}
              className={`cursor-pointer border-2 ${
                selectedImage === "/img/tv-lg-first-image.png"
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <Image
              src="/img/tv-lg-second-image.png"
              alt="LG C2 42 4K Smart OLED Thumbnail 2"
              width={60}
              height={60}
              onClick={() => setSelectedImage("/img/tv-lg-second-image.png")}
              className={`cursor-pointer border-2 ${
                selectedImage === "/img/tv-lg-second-image.png"
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <Image
              src="/img/tv-lg-third-image.png"
              alt="LG C2 42 4K Smart OLED Thumbnail 3"
              width={60}
              height={60}
              onClick={() => setSelectedImage("/img/tv-lg-third-image.png")}
              className={`cursor-pointer border-2 ${
                selectedImage === "/img/tv-lg-third-image.png"
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            <Image
              src="/img/tv-lg-fourth-image.png"
              alt="LG C2 42 4K Smart OLED Thumbnail 4"
              width={60}
              height={60}
              onClick={() => setSelectedImage("/img/tv-lg-fourth-image.png")}
              className={`cursor-pointer border-2 ${
                selectedImage === "/img/tv-lg-fourth-image.png"
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={selectedImage}
              alt="LG C2 42 4K Smart OLED"
              width={500}
              height={500}
              className="w-full h-auto object-cover border-2 border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 w-full space-y-4">
        <h2 className="text-3xl font-bold mb-4">
          LG C2 42 (106CM) 4K Smart OLED evo TV | WebOS | Cinema HDR
        </h2>
        <div className="flex items-center space-x-4">
          <Image
            src="/img/star-ratings.png"
            alt="Star Ratings"
            width={150}
            height={30}
          />
          <span className="text-sm">
            <strong>Brand:</strong> LG
          </span>
          <span className="text-sm">
            <strong>Model:</strong> OLED42C2PSA
          </span>
          <span className="text-sm">
            <strong>Availability:</strong> Only 2 In Stock
          </span>
        </div>
        <ul className="text-sm space-y-2 list-disc pl-6">
          <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
          <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
          <li>Hands-free Voice Control, Always Ready</li>
          <li>Dolby Vision IQ, Dolby Atmos, Filmmaker Mode</li>
          <li>Low-Blue Light, Flicker-Free</li>
        </ul>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-lg line-through">$800.00</span>
          <span className="text-2xl font-bold">$600.72</span>
        </div>
        <div className="flex space-x-2">
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg w-full lg:w-auto">
            Buy Now
          </button>
          <button className="border px-4 py-3 rounded-lg border-red-500 text-red-500 w-full lg:w-auto">
            Add to Cart
          </button>
          <div className="flex items-center border border-gray-300 rounded-lg px-2">
            <button className="px-2 py-1 text-gray-700">-</button>
            <span className="px-4 py-1">1</span>
            <button className="px-2 py-1 text-gray-700">+</button>
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-500 hover:border-red-500 hover:text-red-500">
            106 cm (42)
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-500 hover:border-red-500 hover:text-red-500">
            121 cm (48)
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-500 hover:border-red-500 hover:text-red-500">
            139 cm (55)
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-500 hover:border-red-500 hover:text-red-500">
            164 cm (65)
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-500 hover:border-red-500 hover:text-red-500">
            196 cm (77)
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded-lg text-gray-500 hover:border-red-500 hover:text-red-500">
            210 cm (83)
          </button>
        </div>
      </div>
    </div>
  );
}