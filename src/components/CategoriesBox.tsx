
const CategoriesSection = () => {
  return (
    //absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10
    <div className="absolute right-0 mt-2 w-48 bg-background-categories text-black py-1 z-10">
      <h2 className="text-2xl font-bold mb-2">Categories</h2>
      <ul className="list-none">
        <li className="mb-2">Sarees</li>
        <li className="mb-2">Kurtas</li>
        <li className="mb-2">Dresses</li>
        <li>Accessories</li>
      </ul>
    </div>
  );
};

export default CategoriesSection;