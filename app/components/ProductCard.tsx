'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  colors: number;
  image: string;
  isOnSale?: boolean;
}

export default function ProductCard({
  id,
  name,
  category,
  price,
  originalPrice,
  colors,
  image,
  isOnSale,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  function addToCart() {
    setIsAdded(true);
    window.setTimeout(() => setIsAdded(false), 1400);
  }

  return (
    <div className="group flex flex-col h-full">
      <div
        className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-square"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href={`/products/${id}`} aria-label={`View ${name}`}>
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {isOnSale && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            ON SALE
          </div>
        )}

        {isHovered && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={addToCart}
              className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              {isAdded ? 'Added' : 'Add'}
            </button>
            <button
              type="button"
              onClick={() => setIsFavorite(!isFavorite)}
              aria-label={isFavorite ? `Remove ${name} from favorites` : `Save ${name} to favorites`}
              className={`p-3 rounded-full transition-colors ${
                isFavorite ? 'bg-red-500 text-white' : 'bg-white text-gray-900'
              }`}
            >
              <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
        )}
      </div>

      <div className="flex-grow">
        <Link href={`/products/${id}`} className="block">
          <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base hover:text-blue-600 transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-gray-600 text-xs md:text-sm mb-2">{category}</p>
        <p className="text-gray-500 text-xs md:text-sm mb-3">{colors} Colour{colors !== 1 ? 's' : ''}</p>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-gray-400 line-through text-sm">${originalPrice}</span>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={addToCart}
        className="md:hidden mt-3 w-full bg-black text-white py-2 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors"
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}
