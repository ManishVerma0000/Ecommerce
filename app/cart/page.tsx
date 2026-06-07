import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { products } from '../lib/products';

export default function CartPage() {
  const cartItems = products.slice(0, 2);
  const subtotal = cartItems.reduce((total, product) => total + product.price, 0);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((product) => (
              <div key={product.id} className="flex gap-4 border border-gray-200 rounded-lg p-4">
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                  <Image src={product.image} alt={product.name} fill sizes="96px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <Link href={`/products/${product.id}`} className="font-semibold text-gray-900 hover:text-blue-600">
                    {product.name}
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">{product.category}</p>
                  <p className="text-sm text-gray-600 mt-1">Qty 1</p>
                </div>
                <p className="font-semibold text-gray-900">${product.price}</p>
              </div>
            ))}
          </div>
          <aside className="border border-gray-200 rounded-lg p-6 h-fit">
            <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
            <div className="flex justify-between text-gray-600 mt-6">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-gray-600 mt-3">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-lg font-semibold text-gray-900 border-t border-gray-200 mt-6 pt-6">
              <span>Total</span>
              <span>${subtotal}</span>
            </div>
            <Link href="/checkout" className="block text-center w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-6">
              Checkout
            </Link>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
