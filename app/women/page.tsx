import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import { filterProducts } from '../lib/products';

export default function WomenPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductListing title="Women's Shoes & Apparel" eyebrow="Women" products={filterProducts('women')} />
      <Footer />
    </main>
  );
}
