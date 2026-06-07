'use client';

import Link from 'next/link';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { clearStoredUser, getStoredUser, StoreUser } from '../lib/auth';

export default function AuthNav({ onNavigate }: { onNavigate?: () => void }) {
  const [user, setUser] = useState<StoreUser | null>(null);

  useEffect(() => {
    function syncUser() {
      setUser(getStoredUser());
    }

    syncUser();
    window.addEventListener('stephub-auth-change', syncUser);
    window.addEventListener('storage', syncUser);

    return () => {
      window.removeEventListener('stephub-auth-change', syncUser);
      window.removeEventListener('storage', syncUser);
    };
  }, []);

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link href="/login" onClick={onNavigate} className="text-sm font-medium text-gray-700 hover:text-black">
          Login
        </Link>
        <Link href="/signup" onClick={onNavigate} className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
          Sign Up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="hidden lg:inline-flex items-center gap-2 text-sm text-gray-700">
        <User size={16} />
        {user.name}
      </span>
      <button
        type="button"
        onClick={() => {
          clearStoredUser();
          onNavigate?.();
        }}
        className="text-sm font-medium text-gray-700 hover:text-black"
      >
        Logout
      </button>
    </div>
  );
}
