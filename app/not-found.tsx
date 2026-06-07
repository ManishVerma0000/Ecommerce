import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-20 text-center">
        <p className="text-sm font-semibold text-blue-600">404</p>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Page not found</h1>
        <p className="text-gray-600 mt-4">This page is not available, but the latest StepHub drops are ready.</p>
        <Link href="/" className="inline-flex mt-8 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Back to home
        </Link>
      </section>
      <Footer />
    </main>
  );
}
