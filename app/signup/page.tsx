import { Suspense } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AuthForm from '../components/AuthForm';

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16 flex justify-center">
        <Suspense fallback={<div className="text-gray-600">Loading signup...</div>}>
          <AuthForm mode="signup" />
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}
