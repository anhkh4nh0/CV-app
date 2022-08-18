/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
        <img
            src={product.image}
            alt={product.name}
            
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5 font-bold">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border w-full font-bold border-blue-500 hover:border-transparent rounded"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}