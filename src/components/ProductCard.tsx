'use client';
import React from 'react';
import Button from './ButtonProp';

interface ProductCardProps {
  name: string;
  price: string;  
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price }) => {
  return (
    <div className="bg-product-card-one border border-beige-400 p-4 py-4 rounded-md shadow-md">
      <div className="bg-beige-300 h-48 w-full mb-4 rounded-md"></div> {/* Placeholder for Image */}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700">{price}</p>
      <Button onClick={()=>{}} text={'Add to Cart'}></Button>
    </div>
  );
};

export default ProductCard;
