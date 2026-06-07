'use client';

import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../lib/products';

export default function SearchPageClient({ products, initialQuery }: { products: Product[]; initialQuery: string }) {
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return products;

    return products.filter((product) => {
      const searchable = [
        product.name,
        product.category,
        product.audience,
        product.collection,
        ...product.tags,
      ].join(' ').toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [products, query]);

  return (
    <>
      <div className="max-w-2xl">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
          Search products
        </label>
        <input
          id="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try running, classics, men, sale..."
          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <p className="text-sm text-gray-600 mt-6">{results.length} results</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-6">
        {results.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
}
