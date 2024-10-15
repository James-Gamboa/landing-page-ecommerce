"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <header className="text-white">
      <div className="flex justify-between items-center p-2 bg-custom-high-gray text-sm">
        <span>Welcome to Needus & Get the best product</span>
        <div>
          <button className="mr-2">ENG </button> |
          <button className="ml-2">USD</button>
        </div>
      </div>
      <div className="bg-white text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Image
            src="/img/logo-needus.png"
            alt="Logo Needus"
            width={100}
            height={100}
            className="text-2xl font-bold"
          />
          <div className="flex items-center rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search Products"
              className="p-2 outline-none"
            />
            <Image
              src="/img/search.png"
              alt="Search Icon"
              width={35}
              height={35}
              className="p-2 bg-custom-high-gray"
            />
            <div className="relative">
              <button
                onMouseEnter={() => setShowSubmenu(true)}
                onMouseLeave={() => setShowSubmenu(false)}
                className="px-4 py-2 text-black rounded"
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
          </div>
          <div className="flex items-center space-x-4 text-black">
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
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