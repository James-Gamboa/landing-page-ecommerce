import ProductDetail from "./components/ProductDetail";
import RelatedProducts from "./components/RelatedProducts";

export default function HomePage() {
  return (
    <main>
      <div className="p-6 md:px-10 md:py-16 bg-custom-light-gray text-center text-black w-full">
        <h1 className="text-3xl md:text-5xl font-bold uppercase">
          TV Collection
        </h1>
        <span className="text-sm md:text-base">Home / Product / TV Collection</span>
      </div>
      <ProductDetail />
      <RelatedProducts />
    </main>
  );
}