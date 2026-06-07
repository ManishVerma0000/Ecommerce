import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/products';

export default function FavoritesPage() {
  const favoriteProducts = products.filter((product) => product.isNew).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Favorites</h1>
        <p className="text-gray-600 mt-3">A starter shelf of new picks. Save products from the grid to mark your own favorites during the session.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
