'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { postData } from '@/lib/api';
import { useAppContext } from "@/context/Context";

const Page = () => {
  const {userLoginData, setUserLoginData} = useAppContext()
  const router = useRouter();
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setUserLoginData((prevData) => ({...prevData, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postData("/auth/login/", userLoginData);
      console.log(response)
      document.cookie = `token=${response.data.token}; path=/;`;
     router.push('/customer')
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
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
                  value={userLoginData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-3 focus:outline-none"
                />
              </div>
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
                  value={userLoginData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-3 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div className="text-right">
            <a href="#" className="text-sm text-gray-400 hover:text-orange-500">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-full transition duration-200"
          >
            {" "}
            {/* <Link href="/customer">Sign In</Link> */}
            Sign In
          </button>

          {/* <div className="text-center text-sm text-gray-500">
            or Sign in with...
          </div>

          <div className="flex justify-center space-x-2">
            <button className="p-2 px-6 rounded-[25px] border-2 border-gray-200 hover:border-gray-300 ">
              <Image
                src="/assets/image/gmail.png"
                alt="Google"
                width={34}
                height={34}
              />
            </button>
            <button className="p-2 rounded-[25px]  px-4 border-2 border-gray-200 hover:border-gray-300">
              <Image
                src="/assets/image/Facebook.png"
                alt="Facebook"
                width={54}
                height={54}
              />
            </button>
          </div> */}

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
