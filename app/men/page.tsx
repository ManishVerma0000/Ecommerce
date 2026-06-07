import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import { filterProducts } from '../lib/products';

export default function MenPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductListing title="Men's Shoes & Apparel" eyebrow="Men" products={filterProducts('men')} />
      <Footer />
    </main>
  );
}
