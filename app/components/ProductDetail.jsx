"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(
    "/img/tv-lg-first-image.png"
  );

  return (
    <div className="container mx-auto p-4 lg:px-8">
      <div className="lg:flex lg:space-x-8">
        <div className="lg:w-1/3 w-full">
          <div className="mb-4 transition-transform duration-300 hover:scale-105">
            <Image
              src={selectedImage}
              alt="LG C2 42 4K Smart OLED"
              width={250}
              height={250}
              className="w-full h-auto object-cover bg-custom-bg-gray"
            />
          </div>
          <span className="text-sm text-custom-text-gray block">
            *LG C2 42 (106cm) 4K Smart OLED evo TV
          </span>
          <div className="flex lg:flex-col flex-row lg:space-y-4 space-x-4 lg:space-x-0">
            <Image
              src="/img/tv-lg-first-image.png"
              alt="LG C2 42 4K Smart OLED Thumbnail 1"
              width={250}
              height={250}
              onClick={() => setSelectedImage("/img/tv-lg-first-image.png")}
              className={`w-20 h-20 object-cover border cursor-pointer border-gray-300 transition-all duration-250 hover:border-red-500 ${
                selectedImage === "/img/tv-lg-first-image.png"
                  ? "border-red-500"
                  : ""
              }`}
            />
            <Image
              src="/img/tv-lg-second-image.png"
              alt="LG C2 42 4K Smart OLED Thumbnail 2"
              width={250}
              height={250}
              onClick={() => setSelectedImage("/img/tv-lg-second-image.png")}
              className={`w-20 h-20 object-cover border cursor-pointer border-gray-300 transition-all duration-250 hover:border-red-500 ${
                selectedImage === "/img/tv-lg-second-image.png"
                  ? "border-red-500"
                  : ""
              }`}
            />
            <Image
              src="/img/tv-lg-third-image.png"
              alt="LG C2 42 4K Smart OLED Thumbnail 3"
              width={250}
              height={250}
              onClick={() => setSelectedImage("/img/tv-lg-third-image.png")}
              className={`w-20 h-20 object-cover border cursor-pointer border-gray-300 transition-all duration-250 hover:border-red-500 ${
                selectedImage === "/img/tv-lg-third-image.png"
                  ? "border-red-500"
                  : ""
              }`}
            />
            <Image
              src="/img/tv-lg-fourth-image.png"
              alt="LG C2 42 4K Smart OLED Thumbnail 4"
              width={250}
              height={250}
              onClick={() => setSelectedImage("/img/tv-lg-fourth-image.png")}
              className={`w-20 h-20 object-cover border cursor-pointer border-gray-300 transition-all duration-250 hover:border-red-500 ${
                selectedImage === "/img/tv-lg-fourth-image.png"
                  ? "border-red-500"
                  : ""
              }`}
            />
          </div>
        </div>
        <div className="lg:w-2/3 w-full mt-8 lg:mt-0 space-y-4">
          <h2 className="text-2xl font-bold mb-4">
            LG C2 42 (106CM) 4K Smart OLED evo TV | WebOS | Cinema HDR
          </h2>
          <div className="flex justify-between items-center space-x-4">
            <Image
              src="/img/star-ratings.png"
              alt="Star Ratings"
              width={150}
              height={150}
              className="inline-block"
            />
            <span className="text-sm text-black">
              <strong>Brand:</strong> LG
            </span>
            <span className="text-sm text-black">
              <strong>Model:</strong> OLED42C2PSA
            </span>
            <span className="text-sm text-black">
              <strong>Availability:</strong> Only 2 In Stock
            </span>
          </div>
          <ul className="text-sm text-black space-y-2 list-disc list-inside">
            <li>α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling</li>
            <li>Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume</li>
            <li>Hands-free Voice Control, Always Ready</li>
            <li>Dolby Vision IQ, Dolby Atmos, Filmmaker Mode</li>
            <li>Low-Blue Light, Flicker-Free</li>
          </ul>
          <span className="block text-lg mb-2 text-custom-low-gray line-through">
            $800.00
          </span>
          <span className="block text-2xl text-black mb-4">$600.72</span>
          <div className="flex space-x-2">
            <button className="bg-custom-light-orange text-white px-6 py-3 rounded w-full lg:w-auto">
              Buy Now
            </button>
            <button className="border px-4 py-2 rounded border-custom-light-orange text-custom-light-orange w-full lg:w-auto">
              Add to Cart
            </button>
            <div className="flex items-center border border-gray-300 rounded">
              <button className="px-2 py-1 text-gray-700 hover:bg-gray-250">
                -
              </button>
              <span className="px-4 py-1">1</span>
              <button className="px-2 py-1 text-gray-700 hover:bg-gray-250">
                +
              </button>
            </div>
          </div>
          <div className="mt-4 space-x-2">
            <button className="text-custom-text-gray border border-gray-300 px-4 py-2 rounded hover:border-custom-light-orange hover:text-custom-light-orange">
              106 cm (42)
            </button>
            <button className="text-custom-text-gray border border-gray-300 px-4 py-2 rounded hover:border-custom-light-orange hover:text-custom-light-orange">
              121 cm (48)
            </button>
            <button className="text-custom-text-gray border border-gray-300 px-4 py-2 rounded hover:border-custom-light-orange hover:text-custom-light-orange">
              139 cm (55)
            </button>
            <button className="text-custom-text-gray border border-gray-300 px-4 py-2 rounded hover:border-custom-light-orange hover:text-custom-light-orange">
              164 cm (65)
            </button>
            <button className="text-custom-text-gray border border-gray-300 px-4 py-2 rounded hover:border-custom-light-orange hover:text-custom-light-orange">
              196 cm (77)
            </button>
            <button className="text-custom-text-gray border border-gray-300 px-4 py-2 rounded hover:border-custom-light-orange hover:text-custom-light-orange">
              210 cm (83)
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-black">
        <ul className="flex space-x-4 border-b pb-2">
          <li className="cursor-pointer hover:text-custom-light-orange">
            Description
          </li>
          <li className="cursor-pointer hover:text-custom-light-orange">
            Specification
          </li>
          <li className="cursor-pointer hover:text-custom-light-orange">
            Reviews
          </li>
        </ul>
        <div className="mt-4">
          <p>
            The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we&apos;ve tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.
          </p>
          <p>
            *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
          </p>
          <p>
            65C2 Stand model is at a minimum 39% lighter than the C1 series.
            <span className="text-custom-light-orange">More...</span>
          </p>
        </div>
      </div>
    </div>
  );
}