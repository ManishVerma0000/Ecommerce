import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { collections, products } from '../lib/products';

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6 md:mb-8">
          <Link href="/" className="hover:text-black">Home page</Link>
          <span>/</span>
          <span className="text-black font-medium">Collections</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Collections</h1>
        <p className="text-gray-600 mt-3 max-w-2xl">Curated edits for running, court classics, Air icons, and everyday performance.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {collections.map((collection) => {
            const firstProduct = products.find((product) => product.collection === collection) ?? products[0];
            const count = products.filter((product) => product.collection === collection).length;

            return (
              <Link key={collection} href={`/search?collection=${encodeURIComponent(collection)}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={firstProduct.image}
                    alt={collection}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{collection}</h2>
                    <p className="text-sm text-gray-600 mt-1">{count} products</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">Shop</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </main>
  );
}
