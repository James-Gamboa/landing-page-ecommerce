"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <header className="text-white">
      <div className="flex justify-between items-center px-4 py-2 bg-custom-high-gray text-sm h-20">
        <span className="mx-4">Welcome to Needus & Get the best product</span>
        <div className="flex items-center space-x-4 mx-4">
          <button className="flex items-center">
            ENG <FaChevronDown className="ml-1" />
          </button>
          <span>|</span>
          <button className="flex items-center">
            USD <FaChevronDown className="ml-1" />
          </button>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex w-40">
            <Image
              src="/img/logo-needus.png"
              alt="Logo Needus"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center space-x-2 relative">
            <input
              type="text"
              placeholder="Search Products"
              className="p-2 outline-none w-full text-black border border-gray-300 rounded-l-md"
            />
            <Image
              src="/img/search.png"
              alt="Search Icon"
              width={35}
              height={35}
              className="p-2 bg-custom-high-gray rounded-r-md border-2"
            />
            <div
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={() => setShowSubmenu(false)}
              className="flex items-center px-4 py-2 text-black cursor-pointer relative"
            >
              <span className="mr-1 whitespace-nowrap">All Categories</span>
              <FaChevronDown className="text-black" />
              {showSubmenu && (
                <div className="absolute left-0 top-full mt-2 w-48 bg-white text-gray-800 shadow-lg z-10">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Link
                      href={`/category/${num}`}
                      key={num}
                      className="block px-4 py-2 border-b hover:bg-gray-100"
                    >
                      Category {num}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4 text-black">
            <Link href="/">Login</Link>
            <Link href="/">Signup</Link>
            <Image
              src="/img/favorite.png"
              alt="Favorite Icon"
              width={20}
              height={20}
            />
            <Image
              src="/img/shopcard-logo.png"
              alt="Shopping Cart Icon"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </header>
  );
}