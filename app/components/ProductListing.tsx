'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Filters, { defaultFilters, FilterState } from './Filters';
import ProductCard from './ProductCard';
import { Product } from '../lib/products';

interface ProductListingProps {
  title: string;
  products: Product[];
  eyebrow?: string;
}

function applyFilters(products: Product[], filters: FilterState) {
  return products.filter((product) => {
    const matchesCategory = filters.categories.length === 0 || filters.categories.includes(product.category);
    const matchesSize = filters.sizes.length === 0 || filters.sizes.some((size) => product.sizes.includes(size));
    const matchesPrice = product.price <= filters.priceMax;
    const matchesSale = !filters.onSale || product.isOnSale;

    return matchesCategory && matchesSize && matchesPrice && matchesSale;
  });
}

function sortProducts(products: Product[], sortBy: string) {
  return [...products].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'popular') return b.colors - a.colors;
    return Number(b.isNew) - Number(a.isNew);
  });
}

export default function ProductListing({ title, products, eyebrow = 'Shop' }: ProductListingProps) {
  const [sortBy, setSortBy] = useState('latest');
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const visibleProducts = useMemo(() => {
    return sortProducts(applyFilters(products, filters), sortBy);
  }, [products, filters, sortBy]);

  const shownProducts = visibleProducts.slice(0, visibleCount);

  function clearFilters() {
    setFilters(defaultFilters);
    setVisibleCount(6);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 md:mb-8">
        <Link href="/" className="hover:text-black">Home page</Link>
        <span>/</span>
        <span className="text-black font-medium">{eyebrow}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <span className="text-sm text-gray-600">{visibleProducts.length} results</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="latest">Latest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="hidden md:block md:col-span-1">
          <div className="sticky top-28">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
            <Filters filters={filters} onChange={setFilters} />

            <div className="flex gap-3 mt-8">
              <button
                type="button"
                onClick={clearFilters}
                className="flex-1 border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:border-black transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <button
            type="button"
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="md:hidden w-full mb-6 flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors"
          >
            <span>{isMobileFiltersOpen ? 'Close filter' : 'Open filter'}</span>
            <span>{isMobileFiltersOpen ? '-' : '+'}</span>
          </button>

          {isMobileFiltersOpen && (
            <div className="md:hidden mb-6 border border-gray-200 rounded-lg p-4">
              <Filters filters={filters} onChange={setFilters} />
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 w-full border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:border-black transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}

          {shownProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {shownProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900">No products found</h3>
              <p className="text-gray-600 mt-2">Try removing a filter or raising the price limit.</p>
            </div>
          )}

          {visibleCount < visibleProducts.length && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + 6)}
                className="px-8 py-3 border border-gray-300 rounded-lg font-medium text-gray-900 hover:border-black transition-colors"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
