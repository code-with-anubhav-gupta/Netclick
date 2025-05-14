"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/Context";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { handleLogin } from "../services/itemService";

const Page = () => {
  const { userLoginData, setUserLoginData } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLoginData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    await handleLogin({
      userLoginData,
      setIsLoading,
      setErrors,
      router,
    });
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      <div className="max-w-md w-full space-y-8 text-black p-8 rounded-xl shadow-2xl">
        <div className="text-left space-y-6">
          <div className="relative flex flex-col sm:block items-start">
            <div className="flex flex-row-reverse sm:flex-col items-center sm:mb-4 gap-6 sm:gap-0 justify-between">
              <Image
                src="/assets/image/login-graphic.png"
                alt="Login Graphic"
                width={100}
                height={100}
                className="w-[160px] h-[150px] object-contain sm:mx-auto"
                priority
              />
              <h1 className="text-3xl font-bold text-gray-900 text-left">
                Login
              </h1>
            </div>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-5">
            <div>
              <div className="flex items-center border-b-2 border-gray-200 py-2">
                <span className="text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  value={userLoginData.email || ""}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full pl-3 focus:outline-none ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div>
              <div className="flex items-center border-b-2 border-gray-200 py-2">
                <span className="text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  name="password"
                  value={userLoginData.password || ""}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`w-full pl-3 focus:outline-none ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  disabled={isLoading}
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-gray-400 hover:text-orange-500">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-full transition duration-200 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing in...
              </span>
            ) : (
              "Sign In"
            )}
          </button>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have Account?{" "}
            <Link
              href="/signup"
              className="text-orange-400 hover:text-orange-500 font-medium italic underline bold"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
