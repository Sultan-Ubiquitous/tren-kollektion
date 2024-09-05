import React from 'react';
import Image from 'next/image';

type Size = 'S' | 'M' | 'L' | 'XL';

interface ProductDetails {
  material: string;
  design: string;
  length: string;
  careInstructions: string;
}

interface ProductPageProps {
  name: string;
  price: number;
  description: string;
  details: ProductDetails;
  sizes: Size[];
}

const ProductImage: React.FC = () => (
  <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
    <div className="text-gray-400">
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  </div>
);

const SizeSelector: React.FC<{ sizes: Size[] }> = ({ sizes }) => (
  <div className="mt-4">
    <h3 className="text-sm font-medium text-gray-900">Size</h3>
    <div className="mt-2 flex space-x-2">
      {sizes.map((size) => (
        <button
          key={size}
          className="px-3 py-1 border border-gray-300 text-sm font-medium rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {size}
        </button>
      ))}
    </div>
  </div>
);

const QuantitySelector: React.FC = () => (
  <div className="mt-4">
    <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
    <div className="mt-2 flex items-center space-x-2">
      <button className="px-2 py-1 border border-gray-300 rounded-md">-</button>
      <input
        type="text"
        className="w-12 text-center border-gray-300 rounded-md"
        value="1"
        readOnly
      />
      <button className="px-2 py-1 border border-gray-300 rounded-md">+</button>
    </div>
  </div>
);

const ProductDetails: React.FC<{ details: ProductDetails }> = ({ details }) => (
  <div className="mt-8">
    <h3 className="text-sm font-medium text-gray-900">Details</h3>
    <ul className="mt-2 text-sm text-gray-600 space-y-2">
      <li>{details.material}</li>
      <li>{details.design}</li>
      <li>{details.length}</li>
      <li>{details.careInstructions}</li>
    </ul>
  </div>
);

const ProductPage: React.FC<ProductPageProps> = ({
  name,
  price,
  description,
  details,
  sizes,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        <ProductImage />
        
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{name}</h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">${price.toFixed(2)}</p>
          </div>
          
          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{description}</p>
          </div>
          
          <ProductDetails details={details} />
          <SizeSelector sizes={sizes} />
          <QuantitySelector />
          
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;