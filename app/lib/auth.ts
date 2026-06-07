export interface StoreUser {
  name: string;
  email: string;
}

const userKey = 'stephub-user';

let cachedUser: StoreUser | null = null;
let cachedRawValue: string | null = null;

export function getStoredUser(): StoreUser | null {
  if (typeof window === 'undefined') return null;

  const value = window.localStorage.getItem(userKey);
  if (!value) {
    cachedUser = null;
    cachedRawValue = null;
    return null;
  }

  if (value === cachedRawValue) {
    return cachedUser;
  }

  try {
    cachedUser = JSON.parse(value) as StoreUser;
    cachedRawValue = value;
    return cachedUser;
  } catch {
    window.localStorage.removeItem(userKey);
    cachedUser = null;
    cachedRawValue = null;
    return null;
  }
}

export function saveStoredUser(user: StoreUser) {
  window.localStorage.setItem(userKey, JSON.stringify(user));
  window.dispatchEvent(new Event('stephub-auth-change'));
}

export function clearStoredUser() {
  window.localStorage.removeItem(userKey);
  window.dispatchEvent(new Event('stephub-auth-change'));
}
