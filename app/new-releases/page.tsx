import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import { filterProducts } from '../lib/products';

export default function NewReleasesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductListing title="New Releases" eyebrow="New Releases" products={filterProducts('new-releases')} />
      <Footer />
    </main>
  );
}
