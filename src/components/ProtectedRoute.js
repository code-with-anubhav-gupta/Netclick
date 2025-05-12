// components/ProtectedRoute.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getTokenFromCookie } from '@/lib/auth';
import LoadingPage from '@/app/loading/page';
import { useAppContext } from "@/context/Context";

export default function ProtectedRoute({ children }) {
  const {loading, setLoading} = useAppContext();
  const router = useRouter();

  useEffect(() => {
    const token = getTokenFromCookie();
    if (!token) {
      router.replace('/signin');
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return <LoadingPage/>;

  return children;
}
