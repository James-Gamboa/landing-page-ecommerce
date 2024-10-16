"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronDown, FiMenu } from "react-icons/fi";

export default function NavBar() {
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-custom-high-gray">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="relative hidden lg:flex items-center bg-custom-light-orange px-4 py-2 rounded-md flex-grow max-w-xs ">
          <FiMenu className="text-white text-xl mr-2" />
          <button
            onMouseEnter={() => setShowSubmenu(true)}
            onMouseLeave={() => setShowSubmenu(false)}
            className="text-white text-lg flex items-center"
          >
            All Categories
            <FiChevronDown className="ml-2" />
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
        <div className="hidden lg:flex space-x-6 text-white text-lg flex-grow justify-center">
          {["HOME", "ABOUT", "PRODUCT", "PAGES", "CONTACT"].map(
            (item, index) => (
              <div key={index} className="relative group">
                <Link
                  href="/"
                  className={`hover:text-custom-light-orange transition duration-300 px-2 py-1 flex items-center ${
                    item === "PRODUCT" ? "text-custom-light-orange font-semibold" : ""
                  }`}
                >
                  {item}
                  {item !== "PRODUCT" && (
                    <FiChevronDown className="ml-1 hidden group-hover:inline-block" />
                  )}
                </Link>
              </div>
            )
          )}
        </div>
        <div className="flex items-center text-white border-l border-white pl-4 ml-4">
          <Image
            src="/img/logo-support.png"
            alt="Logo Support"
            width={25}
            height={25}
            className="mr-2"
          />
          <div className="flex flex-col text-right">
            <p className="text-xs font-light">CONTACT US 24/7</p>
            <span className="text-sm font-semibold">+12012987481</span>
          </div>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white"
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 text-white space-y-2 p-4">
          {["HOME", "ABOUT", "PRODUCT", "PAGES", "CONTACT"].map(
            (item, index) => (
              <div key={index} className="flex justify-between items-center">
                <Link
                  href="/"
                  className="hover:text-custom-light-orange transition duration-300"
                >
                  {item}
                </Link>
                <FiChevronDown />
              </div>
            )
          )}
        </div>
      )}
    </nav>
  );
}