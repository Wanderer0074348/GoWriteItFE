'use client';
import { User } from 'lucide-react';
import { createContext, useContext } from 'react';

const MOCK_USER = {
  isLoggedIn: true,
  name: 'Jane Doe',
  avatar: 'https://i.pravatar.cc/40?u=jane-doe',
};

const UserContext = createContext(MOCK_USER);

export function useUser() {
  return useContext(UserContext);
}
