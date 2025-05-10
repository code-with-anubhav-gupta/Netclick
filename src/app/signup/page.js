import Image from 'next/image';
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-zinc-300 flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white text-black p-8 rounded-xl shadow-lg">
      <div className="text-left space-y-6">
        <div className="relative flex flex-col sm:block items-start">
          <div className="flex flex-row-reverse sm:flex-col gap-6 sm:gap-0 items-center sm:mb-4">
            <Image
              src="/assets/image/login-graphic.png"
              alt="Login Graphic"
              width={100}
              height={100}
              className="  w-[120px] h-[150px] object-contain sm:mx-auto"
            />
            <h1 className="text-3xl font-bold text-gray-900 text-left">SignUp</h1>
          </div>
        </div>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center border-b-2 border-gray-200">
                <span className="text-gray-500 mr-2">
                  <img src="/assets/image/Name.png" alt="icon" className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center border-b-2 border-gray-200">
                <span className="text-gray-500 mr-2">
                  <img src="/assets/image/phone.png" alt="icon" className="h-5 w-5" />
                </span>
                <input
                  type="tel"
                  placeholder="Phone No"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center border-b-2 border-gray-200">
                <span className="text-gray-500 mr-2">
                  <img src="/assets/image/category.png" alt="icon" className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center border-b-2 border-gray-200">
                <span className="text-gray-500 mr-2">
                  <img src="/assets/image/Email.png" alt="icon" className="h-5 w-5" />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center border-b-2 border-gray-200">
                <span className="text-gray-500 mr-2">
                  <img src="/assets/image/password.png" alt="icon" className="h-5 w-5" />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full py-2 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold transition duration-200 rounded-[20px]"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Don't have Account?{' '}
          <Link href="/signin" className="text-orange-400 hover:text-orange-500 italic font-bold underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page;