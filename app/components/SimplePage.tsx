import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

interface SimplePageProps {
  title: string;
  description: string;
  items?: string[];
}

export default function SimplePage({ title, description, items = [] }: SimplePageProps) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <Link href="/" className="text-sm text-gray-600 hover:text-black">Home page</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">{title}</h1>
          <p className="text-gray-600 mt-4 leading-7">{description}</p>
          {items.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {items.map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg p-5">
                  <p className="font-semibold text-gray-900">{item}</p>
                </div>
              ))}
            </div>
          )}
          <Link href="/new-releases" className="inline-flex mt-8 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Shop New Releases
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
