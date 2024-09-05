import ProductCard from "./ProductCard";

const sampleProducts = [
  { name: 'Silk Saree', price: '$99.99' },
  { name: 'Embroidered Kurta', price: '$79.99' },
  { name: 'Beaded Necklace', price: '$39.99' },
];

const NewArrivals: React.FC = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sampleProducts.map((product, index) => (
            <ProductCard key={index} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
