'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Step Into Style
            </h1>
            <p className="text-gray-600 text-lg mb-6 max-w-md">
              Discover premium shoes and apparel designed for daily miles, match days, streetwear fits, and everywhere after.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/new-releases" className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Shop Now
              </Link>
              <Link href="/collections" className="border border-gray-300 px-8 py-3 rounded-lg font-semibold text-gray-900 hover:border-black transition-colors">
                Collections
              </Link>
            </div>
          </div>

          <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg bg-white">
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&h=640&fit=crop"
              alt="Model wearing stylish athletic apparel"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
