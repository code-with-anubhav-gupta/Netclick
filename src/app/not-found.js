// app/unauthorized/page.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-md w-full"
      >
        <Image
          src="/assets/image/logo-black.png"
          alt="403 Unauthorized"
          width={400}
          height={300}
          className="mx-auto mb-8"
        />

        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          404 - Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          Could not find requested resource...
        </p>

        <Link href="/">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-full transition duration-200">
            Go back home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
