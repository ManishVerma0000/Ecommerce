import Footer from '../components/Footer';
import Header from '../components/Header';
import CheckoutClient from './CheckoutClient';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Checkout</h1>
        <CheckoutClient />
      </section>
      <Footer />
    </main>
  );
}
