import ProductDetail from "./components/ProductDetail";
import RelatedProducts from "./components/RelatedProducts";

export default function HomePage() {
  return (
    <main>
      <div className="container p-6 md:px-10 md:py-16 mx-auto bg-custom-light-gray">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-black uppercase">
          TV Collection
        </h1>
        <span className="text-center text-black">Home / Product / Tv Collection</span>
      </div>
      <ProductDetail/>
      <RelatedProducts/>
    </main>
  );
}