"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <nav className="bg-custom-high-gray">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="relative">
          <button
            onMouseEnter={() => setShowSubmenu(true)}
            onMouseLeave={() => setShowSubmenu(false)}
            className="px-4 py-2 bg-custom-light-orange text-white rounded"
          >
            All Categories
          </button>
          {showSubmenu && (
            <div
              onMouseEnter={() => setShowSubmenu(true)}
              onMouseLeave={() => setShowSubmenu(false)}
              className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg"
            >
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
        <div className="flex space-x-6 text-white">
          <Link href="/" className="hover:text-custom-light-orange transition duration-300 px-2 py-1">HOME</Link>
          <Link href="/" className="hover:text-custom-light-orange transition duration-300 px-2 py-1">ABOUT</Link>
          <Link href="/" className="hover:text-custom-light-orange transition duration-300 px-2 py-1">PRODUCT</Link>
          <Link href="/" className="hover:text-custom-light-orange transition duration-300 px-2 py-1">PAGES</Link>
          <Link href="/" className="hover:text-custom-light-orange transition duration-300 px-2 py-1">CONTACT</Link>
          </div>
        <div className="flex items-center text-white">
          <p>Contact Us 24/7</p>
          <Image
            src="/img/logo-support.png"
            alt="Logo Support"
            width={20}
            height={20}
            className="text-2xl font-bold"
          />
          <span className="ml-2">+12012987481</span>
        </div>
      </div>
    </nav>
  );
}
