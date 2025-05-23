"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getTokenFromCookie, getUserRoleFromCookie } from "@/lib/auth";
import LoadingPage from "@/components/common/LoadingPage";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getTokenFromCookie();
    const type = getUserRoleFromCookie();

    if (!token) {
      router.replace("/signin");
      return;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(type)) {
      router.replace("/unauthorized");
      return;
    }

    setLoading(false);
  }, [router, allowedRoles]);

  if (loading) return <LoadingPage />;
  return children;
}
