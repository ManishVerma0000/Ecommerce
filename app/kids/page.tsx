import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import { filterProducts } from '../lib/products';

export default function KidsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductListing title="Kids' Shoes & Apparel" eyebrow="Kids" products={filterProducts('kids')} />
      <Footer />
    </main>
  );
}
