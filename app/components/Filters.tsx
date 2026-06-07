'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export interface FilterState {
  categories: string[];
  sizes: string[];
  priceMax: number;
  onSale: boolean;
}

interface FiltersProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export const defaultFilters: FilterState = {
  categories: [],
  sizes: [],
  priceMax: 1000,
  onSale: false,
};

export default function Filters({ filters, onChange }: FiltersProps) {
  const [expandedFilter, setExpandedFilter] = useState<string | null>('category');

  const filterGroups = [
    {
      name: 'Category',
      id: 'category',
      options: ['Running', 'Basketball', 'Lifestyle', 'Casual', 'Classic', 'Apparel'],
    },
    {
      name: 'Size',
      id: 'size',
      options: ['XS', 'S', 'M', 'L', 'XL', '36', '38', '40', '42', '45', '47'],
    },
    {
      name: 'On Sale',
      id: 'sale',
      options: ['Yes'],
    },
  ];

  function toggleCategory(category: string) {
    onChange({
      ...filters,
      categories: filters.categories.includes(category)
        ? filters.categories.filter((item) => item !== category)
        : [...filters.categories, category],
    });
  }

  function toggleSize(size: string) {
    onChange({
      ...filters,
      sizes: filters.sizes.includes(size)
        ? filters.sizes.filter((item) => item !== size)
        : [...filters.sizes, size],
    });
  }

  return (
    <div className="space-y-6">
      {filterGroups.map((filter) => (
        <div key={filter.id} className="border-b border-gray-200 pb-4">
          <button
            onClick={() => setExpandedFilter(expandedFilter === filter.id ? null : filter.id)}
            type="button"
            className="w-full flex items-center justify-between py-2 font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            {filter.name}
            <ChevronDown
              size={20}
              className={`transition-transform ${expandedFilter === filter.id ? 'rotate-180' : ''}`}
            />
          </button>

          {expandedFilter === filter.id && (
            <div className="mt-4 space-y-3">
              {filter.id === 'category' && (
                filter.options.map((option) => (
                  <label key={option} className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(option)}
                      onChange={() => toggleCategory(option)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600"
                    />
                    <span className="ml-3 text-gray-700 text-sm">{option}</span>
                  </label>
                ))
              )}
              {filter.id === 'size' && (
                filter.options.map((option) => {
                  return (
                    <label key={option} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.sizes.includes(option)}
                        onChange={() => toggleSize(option)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600"
                      />
                      <span className="ml-3 text-gray-700 text-sm">{option}</span>
                    </label>
                  );
                })
              )}
              {filter.id === 'sale' && (
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.onSale}
                    onChange={(event) => onChange({ ...filters, onSale: event.target.checked })}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600"
                  />
                  <span className="ml-3 text-gray-700 text-sm">Sale products only</span>
                </label>
              )}
            </div>
          )}
        </div>
      ))}

      <div className="border-b border-gray-200 pb-4">
        <label htmlFor="price" className="block py-2 font-medium text-gray-900">
          Price up to ${filters.priceMax}
        </label>
        <input
          id="price"
          type="range"
          min="100"
          max="1000"
          step="50"
          value={filters.priceMax}
          onChange={(event) => onChange({ ...filters, priceMax: Number(event.target.value) })}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>$100</span>
          <span>$1000</span>
        </div>
      </div>
    </div>
  );
}
