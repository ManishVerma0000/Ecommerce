import { Suspense } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AuthForm from '../components/AuthForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 flex justify-center">
        <Suspense fallback={<div className="text-gray-600">Loading login...</div>}>
          <AuthForm mode="login" />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
