'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Heart, Menu, Search, ShoppingCart, X } from 'lucide-react';
import { navItems } from '../lib/products';
import AuthNav from './AuthNav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
     

      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          STEP<span className="text-blue-600">HUB</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-black text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/search" className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search products">
            <Search size={20} className="text-gray-700" />
          </Link>
          <Link href="/favorites" className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Favorites">
            <Heart size={20} className="text-gray-700" />
          </Link>
          <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Cart">
            <ShoppingCart size={20} className="text-gray-700" />
          </Link>
          <AuthNav />
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          aria-label="Toggle navigation"
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-black font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 border-t border-gray-100">
              <Link href="/search" onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Search products">
                <Search size={20} />
              </Link>
              <Link href="/favorites" onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Favorites">
                <Heart size={20} />
              </Link>
              <Link href="/cart" onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full" aria-label="Cart">
                <ShoppingCart size={20} />
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <AuthNav onNavigate={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
