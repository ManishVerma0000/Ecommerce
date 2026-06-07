'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { saveStoredUser } from '../lib/auth';

interface AuthFormProps {
  mode: 'login' | 'signup';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get('redirect') ?? '/';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    saveStoredUser({
      name: mode === 'signup' ? name.trim() || email.split('@')[0] : email.split('@')[0],
      email,
    });
    router.push(redirectTo);
  }

  return (
    <form onSubmit={handleSubmit} className="border border-gray-200 rounded-lg p-6 max-w-md w-full">
      <h1 className="text-3xl font-bold text-gray-900">{mode === 'login' ? 'Login' : 'Create Account'}</h1>
      <p className="text-gray-600 mt-2">
        {mode === 'login'
          ? 'Login to continue shopping and checkout faster.'
          : 'Create an account to save your information for checkout.'}
      </p>

      {mode === 'signup' && (
        <div className="mt-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      <div className="mt-6">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength={6}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button type="submit" className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-6">
        {mode === 'login' ? 'Login' : 'Sign Up'}
      </button>

      <p className="text-sm text-gray-600 mt-5">
        {mode === 'login' ? 'New here?' : 'Already have an account?'}{' '}
        <Link href={mode === 'login' ? `/signup?redirect=${encodeURIComponent(redirectTo)}` : `/login?redirect=${encodeURIComponent(redirectTo)}`} className="font-semibold text-blue-600 hover:text-blue-700">
          {mode === 'login' ? 'Create an account' : 'Login'}
        </Link>
      </p>
    </form>
  );
}
