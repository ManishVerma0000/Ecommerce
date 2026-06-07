'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState, useSyncExternalStore } from 'react';
import { getStoredUser } from '../lib/auth';
import { products } from '../lib/products';

const cartItems = products.slice(0, 2);
const subtotal = cartItems.reduce((total, product) => total + product.price, 0);

export default function CheckoutClient() {
  const user = useSyncExternalStore(subscribeToAuth, getStoredUser, () => null);
  const [isPlaced, setIsPlaced] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPlaced(true);
  }

  if (!user) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 border border-gray-200 rounded-lg p-8">
          <p className="text-sm font-semibold text-blue-600">Account required</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-2">Login before checkout</h1>
          <p className="text-gray-600 mt-4">
            Please login or create an account before purchasing. After that, we will collect your shipping and contact information.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/login?redirect=/checkout" className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Login
            </Link>
            <Link href="/signup?redirect=/checkout" className="border border-gray-300 px-8 py-3 rounded-lg font-semibold text-gray-900 hover:border-black transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
        <OrderSummary />
      </div>
    );
  }

  if (isPlaced) {
    return (
      <div className="border border-gray-200 rounded-lg p-8 text-center">
        <p className="text-sm font-semibold text-blue-600">Order placed</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Thanks, {user.name}</h1>
        <p className="text-gray-600 mt-4">Your StepHub order has been received. A confirmation would be sent to {user.email}.</p>
        <Link href="/new-releases" className="inline-flex mt-8 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <Field label="Full name" id="fullName" defaultValue={user.name} />
            <Field label="Email" id="email" type="email" defaultValue={user.email} />
            <Field label="Phone" id="phone" type="tel" />
          </div>
        </section>

        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900">Shipping Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <Field label="Address" id="address" className="md:col-span-2" />
            <Field label="City" id="city" />
            <Field label="State" id="state" />
            <Field label="Postal code" id="postalCode" />
            <Field label="Country" id="country" defaultValue="India" />
          </div>
        </section>

        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900">Payment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <Field label="Card number" id="cardNumber" inputMode="numeric" />
            <Field label="Name on card" id="cardName" />
            <Field label="Expiry" id="expiry" placeholder="MM/YY" />
            <Field label="CVV" id="cvv" inputMode="numeric" />
          </div>
        </section>

        <button type="submit" className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          Place Order
        </button>
      </form>

      <OrderSummary />
    </div>
  );
}

function subscribeToAuth(onStoreChange: () => void) {
  window.addEventListener('stephub-auth-change', onStoreChange);
  window.addEventListener('storage', onStoreChange);

  return () => {
    window.removeEventListener('stephub-auth-change', onStoreChange);
    window.removeEventListener('storage', onStoreChange);
  };
}

function Field({
  label,
  id,
  className = '',
  type = 'text',
  defaultValue,
  placeholder,
  inputMode,
}: {
  label: string;
  id: string;
  className?: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  inputMode?: 'numeric' | 'text';
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        inputMode={inputMode}
        required
        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function OrderSummary() {
  return (
    <aside className="border border-gray-200 rounded-lg p-6 h-fit">
      <h2 className="text-xl font-semibold text-gray-900">Order Summary</h2>
      <div className="space-y-4 mt-6">
        {cartItems.map((product) => (
          <div key={product.id} className="flex gap-3">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
              <Image src={product.image} alt={product.name} fill sizes="64px" className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">{product.name}</p>
              <p className="text-sm text-gray-600">{product.category}</p>
            </div>
            <p className="text-sm font-semibold text-gray-900">${product.price}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-gray-600 mt-6 pt-6 border-t border-gray-200">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between text-gray-600 mt-3">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between text-lg font-semibold text-gray-900 border-t border-gray-200 mt-6 pt-6">
        <span>Total</span>
        <span>${subtotal}</span>
      </div>
    </aside>
  );
}
