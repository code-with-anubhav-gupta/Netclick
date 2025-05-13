// // components/ProtectedRoute.js
// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { getTokenFromCookie } from '@/lib/auth';
// import LoadingPage from '@/app/loading/page';
// import { useAppContext } from "@/context/Context";

// export default function ProtectedRoute({ children }) {
//   const {loading, setLoading} = useAppContext();
//   const router = useRouter();

//   useEffect(() => {
//     const token = getTokenFromCookie();
//     if (!token) {
//       router.replace('/signin');
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   if (loading) return <LoadingPage/>;

//   return children;
// }


'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTokenFromCookie, getUserRoleFromCookie } from '@/lib/auth'; // Assume you have this
import LoadingPage from '@/app/loading/page';

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getTokenFromCookie();
    const type = getUserRoleFromCookie(); // Get role: 'user' or 'provider'
    console.log("token is:-", token)
    console.log("Type is:-", type)
    if (!token) {
      router.replace('/signin');
      return;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(type)) {
      router.replace('/unauthorized');
      return;
    }

    setLoading(false);
  }, []);

  if (loading) return <LoadingPage />;
  return children;
}
