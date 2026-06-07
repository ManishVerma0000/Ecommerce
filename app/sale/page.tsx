import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import { filterProducts } from '../lib/products';

export default function SalePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductListing title="Sale Shoes & Apparel" eyebrow="Sale" products={filterProducts('sale')} />
      <Footer />
    </main>
  );
}
