// provider.js
'use client';
import React, { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/redux/store';

export default function Index({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    import('@/assets/styles/miniline.css');
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
