"use client";
import Image from "next/image";

export default function RelatedProducts() {
  const products = [
    {
      id: 1,
      name: "Sony BRAVIA XR Android Tv",
      price: 800.22,
      oldPrice: 1000.66,
      image: "/img/sony-tv.png",
      favoriteImage: "/img/favorite-product.png",
      label: "NEW",
      labelColor: "bg-green-button",
    },
    {
      id: 2,
      name: "Mi P1 Smart Android HD TV",
      price: 400.00,
      image: "/img/mi-p1-tv.png",
      label: "-10%",
      labelColor: "bg-custom-light-orange",
    },
    {
      id: 3,
      name: "Konka OLED Android Tv",
      price: 700.00,
      image: "/img/konka-tv.png",
      label: "HOT",
      labelColor: "bg-yellow-button",
    },
    {
      id: 4,
      name: "TCL Roku Android Tv",
      price: 800.00,
      image: "/img/tcl-tv.png",
      label: "2 Years Warranty",
      labelColor: "bg-purple-button",
    },
  ];

  return (
    <div className="container mx-auto p-6">
  <h2 className="text-2xl font-bold mb-6 text-center">Related Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <div key={product.id} className="relative border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 bg-custom-light-gray flex flex-col">
        <span className={`absolute top-2 left-2 text-white px-2 py-1 rounded-md ${product.labelColor}`}>
          {product.label}
        </span>
        <span className="absolute top-2 right-2 cursor-pointer">
          {product.id === 1 ? (
            <Image
              src={product.favoriteImage}
              alt="Favorite"
              width={24}
              height={24}
              className="hover:scale-110 transition-transform duration-300"
            />
          ) : null}
        </span>
        <div className="mb-4 flex-grow">
          <Image
            src={product.image}
            alt={product.name}
            width={150}
            height={150}
            className="w-auto h-auto object-cover"
            priority
          />
        </div>
        <button className="text-custom-text-gray flex items-center justify-center w-full bg-white  px-4 py-2 rounded-lg">
              <Image
                src="/img/add-to-cart-icon.png"
                alt="Add to cart"
                width={24}
                height={24}
                className="mr-2"
              />
              Add to cart
            </button>
      </div>
    ))}
    {products.map((product) => (
      <div key={product.id} className="text-center mt-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    ))}
  </div>
  <div className="flex justify-center mt-6">
    <div className="flex space-x-1">
      <span className="w-3 h-3 bg-custom-light-orange rounded-full"></span>
      <span className="w-3 h-3 bg-custom-light-gray rounded-full"></span>
      <span className="w-3 h-3 bg-custom-light-gray rounded-full"></span>
      <span className="w-3 h-3 bg-custom-light-gray rounded-full"></span>
      </div>
  </div>
</div>
  );
}