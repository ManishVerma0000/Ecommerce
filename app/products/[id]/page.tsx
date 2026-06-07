import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Heart, ShoppingCart } from 'lucide-react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import { getProduct, products } from '../../lib/products';

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id.toString() }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((item) => item.id !== product.id && (item.category === product.category || item.collection === product.collection))
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 md:mb-8">
          <Link href="/" className="hover:text-black">Home page</Link>
          <span>/</span>
          <Link href={`/${product.audience === 'Kids' ? 'kids' : product.audience === 'Women' ? 'women' : 'men'}`} className="hover:text-black">
            {product.audience}
          </Link>
          <span>/</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-blue-600 mb-2">{product.collection}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600 mt-3">{product.category} - {product.audience}</p>

            <div className="flex items-center gap-3 mt-6">
              <span className="text-2xl font-semibold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
              )}
              {product.isOnSale && (
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">ON SALE</span>
              )}
            </div>

            <p className="text-gray-700 mt-6 leading-7">{product.description}</p>

            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-semibold text-gray-900">Select Size</h2>
                <Link href="/help" className="text-sm text-gray-600 underline">Size guide</Link>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {product.sizes.map((size) => {
                  const label = /^\d+$/.test(size) ? `EU ${size}` : size;

                  return (
                    <button
                      key={size}
                      type="button"
                      className="border border-gray-200 rounded-lg py-3 font-medium text-gray-900 hover:border-black transition-colors"
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button type="button" className="flex-1 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button type="button" className="flex-1 border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-900 hover:border-black transition-colors flex items-center justify-center gap-2">
                <Heart size={20} />
                Favorite
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-sm text-gray-600">
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">Free shipping</p>
                <p className="mt-1">On orders over $250.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">Easy returns</p>
                <p className="mt-1">30-day return window.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <p className="font-semibold text-gray-900">{product.colors} colors</p>
                <p className="mt-1">More styles available.</p>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You may also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </section>
        )}
      </section>
      <Footer />
    </main>
  );
}
