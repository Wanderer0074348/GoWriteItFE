'use client';
import { createContext, useContext } from 'react';

const MOCK_USER = {
  isLoggedIn: false,
  name: '',
  avatar: '',
};

const UserContext = createContext(MOCK_USER);

export function useUser() {
  return useContext(UserContext);
}
