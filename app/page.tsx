import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import ProductListing from './components/ProductListing';
import Footer from './components/Footer';
import { products } from './lib/products';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <ProductListing title="Shoes & Apparel" products={products} eyebrow="Shop" />
      <Footer />
    </main>
  );
}
