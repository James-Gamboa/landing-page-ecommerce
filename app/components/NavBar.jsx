"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <nav className="bg-gray-900">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="relative">
          <button
            onMouseEnter={() => setShowSubmenu(true)}
            onMouseLeave={() => setShowSubmenu(false)}
            className="px-4 py-2 bg-red-600 rounded"
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
        <div className="flex space-x-6">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/products">PRODUCT</Link>
          <Link href="/pages">PAGES</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
        <div className="flex items-center">
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
