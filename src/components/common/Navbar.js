// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { IoMdArrowDropdown } from "react-icons/io";
// import ServiceProviderSidebarContent from "../features/ServiceProviderSidebarContent";
// import { getTokenFromCookie, getUserRoleFromCookie } from '@/lib/auth';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("profile");
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const token = getTokenFromCookie()
//   const type = getUserRoleFromCookie()

//   const pathname = usePathname();
//   const shouldShowBlogLink = pathname === "/";
//   const serviceProviders = pathname === "/service-provider";

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   return (
//     <header
//       className={`bg-white mx-auto relative ${
//         !shouldShowBlogLink ? " border-gray-200 border-b" : ""
//       }`}
//     >
//       <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto relative">
//         <div className="flex justify-center items-center">
//           <Link href="/">
//             <Image
//               src="/assets/image/logo-black.png"
//               alt="Netclic Logo"
//               width={100}
//               height={50}
//               className="-mt-3 h-auto w-auto object-cover"
//             />
//           </Link>
//           <span className="mx-2 text-gray-500">|</span>
//           <nav className="ml-2 hidden md:block">
//             <ul className="flex space-x-6 text-sm justify-center items-center">
//               <li>
//                 <Link href="#" className="text-gray-500 hover:text-amber-500">
//                   About us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-500 hover:text-amber-500">
//                   Services
//                   <IoMdArrowDropdown className="inline-block ml-1" />
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-500 hover:text-amber-500">
//                   Jobs
//                 </Link>
//               </li>
//               <li>
//                 <a
//                   href="provider"
//                   className="text-gray-500 hover:text-amber-500"
//                 >
//                   Freelancers
//                 </a>
//               </li>
//               {shouldShowBlogLink && (
//                 <>
//                   <li>
//                     <Link
//                       href="#"
//                       className="text-gray-500 hover:text-amber-500"
//                     >
//                       Members
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       href="#"
//                       className="text-gray-500 hover:text-amber-500"
//                     >
//                       Blog
//                     </Link>
//                   </li>
//                 </>
//               )}
//             </ul>
//           </nav>
//         </div>

//         {serviceProviders ? (
//           <div className="flex items-center">
//             <div className="mr-4 hidden md:flex items-center">
//               <Image
//                 // src="https://picsum.photos/32/32?random=1"
//                 src="/assets/image/BussinessWomen.jpg"
//                 alt="Caroline"
//                 width={800}
//                 height={800}
//                 // className="rounded-full"
//                 className="h-8 w-8 bg-cover rounded-full"
//                 priority
//               />
//               <span className="ml-2 text-gray-700">Caroline</span>
//             </div>
//             <button className="hidden md:flex items-center text-amber-500 py-2 rounded-lg">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="34"
//                 height="34"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-align-left-icon lucide-align-left cursor-pointer "
//               >
//                 <path d="M15 12H3" />
//                 <path d="M17 18H3" />
//                 <path d="M21 6H3" />
//               </svg>
//             </button>
//           </div>
//         ) : (
//           <div className="hidden md:flex items-center space-x-4">
//             <Link href='/signin' className="flex items-center px-1 py-2 text-gray-800 font-light md:text-sm sm:px-3 sm:py-2 md:px-4 tracking-tighter md:py-2 rounded-2xl md:rounded-4xl hover:outline hover:outline-amber-500 cursor-pointer">
//               <FaRegCircleUser className="h-4 w-4 mr-1" />
//               Sign in
//             </Link>
//             <Link
//               href="#"
//               className="bg-[#1C1914] text-white px-1 py-2 font-light sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg md:rounded-4xl hover:text-[#F5B23D] cursor-pointer text-sm"
//             >
//               Contact us
//             </Link>
//           </div>
//         )}

//         {/* <div className="hidden md:flex items-center space-x-4">
//           <button className="flex items-center px-1 py-2 text-gray-800 font-light md:text-sm sm:px-3 sm:py-2 md:px-4 tracking-tighter md:py-2 rounded-2xl md:rounded-4xl hover:outline hover:outline-amber-500 cursor-pointer">
//             <FaRegCircleUser className="h-4 w-4 mr-1" />
//             Sign in
//           </button>
//           <button className="bg-[#1C1914] text-white px-1 py-2 font-light sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg md:rounded-4xl hover:text-[#F5B23D] cursor-pointer text-sm">
//             Contact us
//           </button>
//         </div> */}

//         <button
//           className="md:hidden p-2 focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <div className="w-6 h-6 relative">
//             <span
//               className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out ${
//                 isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out translate-y-2 ${
//                 isMenuOpen ? "opacity-0" : "opacity-100"
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out translate-y-4 ${
//                 isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-4"
//               }`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* Mobile Menu Drawer */}
//       <div
//         className={`w-full md:hidden bg-white shadow-lg transform transition-all duration-500 ease-in-out z-50 ${
//           isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
//         }`}
//       >
//         <nav className="px-6 py-4">
//           <ul className="space-y-4">
//             <li>
//               <Link
//                 href="#"
//                 className="text-gray-500 hover:text-amber-500 block"
//               >
//                 About us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 className="text-gray-500 hover:text-amber-500 block"
//               >
//                 Services
//                 <IoMdArrowDropdown className="inline-block ml-1" />
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 className="text-gray-500 hover:text-amber-500 block"
//               >
//                 Jobs
//               </Link>
//             </li>
//             <li>
//               <a
//                 href="provider"
//                 className="text-gray-500 hover:text-amber-500 block"
//               >
//                 Freelancers
//               </a>
//             </li>

//             {shouldShowBlogLink && (
//               <>
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-500 hover:text-amber-500 block"
//                   >
//                     Members
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="#"
//                     className="text-gray-500 hover:text-amber-500 block"
//                   >
//                     Blog
//                   </Link>
//                 </li>
//               </>
//             )}

//             {serviceProviders ? (
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center" onClick={toggleDrawer}>
//                   <Image
//                     src="/assets/image/BussinessWomen.jpg"
//                     alt="Caroline"
//                     width={100}
//                     height={100}
//                     className="h-8 w-8 rounded-full"
//                     priority
//                   />
//                   <span className="ml-2 text-gray-700">Caroline</span>
//                 </div>
//                 {/* Sidebar for medium+ screens */}
//                 <div className="hidden md:flex flex-col items-center md:w-1/6">
//                   <ServiceProviderSidebarContent
//                     activeTab={activeTab}
//                     setActiveTab={setActiveTab}
//                   />
//                 </div>

//                 {/* Drawer for small screens */}
//                 {drawerOpen && (
//                   <div
//                     className="md:hidden absolute top-0 left-0 w-full h-screen z-40"
//                     onClick={toggleDrawer}
//                   >
//                     <div
//                       className="absolute top-0 right-0 h-full w-4/5  rounded-2xl  p-4 z-50 overflow-y-auto"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <ServiceProviderSidebarContent
//                         activeTab={activeTab}
//                         setActiveTab={setActiveTab}
//                         toggleDrawer={toggleDrawer}
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <>
//                 <li className="pt-4">
//                   <Link
//                     href="/signin"
//                     className="flex items-center justify-center w-full text-gray-800 font-light text-sm px-3 py-2 rounded-4xl border border-amber-500 hover:outline hover:outline-amber-500 cursor-pointer"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-4 w-4 mr-1"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                       />
//                     </svg>
//                     Sign in
//                   </Link>
//                 </li>
//                 <li>
//                   <button className="w-full bg-[#1C1914] text-white py-2 px-3 rounded-4xl hover:text-[#F5B23D] cursor-pointer text-sm">
//                     Contact us
//                   </button>
//                 </li>
//               </>
//             )}

//             {/* <li className="pt-4">
//               <button className="flex items-center justify-center w-full text-gray-800 font-light text-sm px-3 py-2 rounded-4xl border border-amber-500 hover:outline hover:outline-amber-500 cursor-pointer">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-4 w-4 mr-1"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//                   />
//                 </svg>
//                 Sign in
//               </button>
//             </li>
//             <li>
//               <button className="w-full bg-[#1C1914] text-white py-2 px-3 rounded-4xl hover:text-[#F5B23D] cursor-pointer text-sm">
//                 Contact us
//               </button>
//             </li> */}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { IoMdArrowDropdown } from "react-icons/io";
// import ServiceProviderSidebarContent from "../features/ServiceProviderSidebarContent";
// import { getTokenFromCookie, getUserRoleFromCookie } from "@/lib/auth";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState("profile");
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const token = getTokenFromCookie();
//   const type = getUserRoleFromCookie();

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   return (
//     <header className="bg-white mx-auto relative border-b border-gray-200">
//       <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto relative">
//         <div className="flex justify-center items-center">
//           <Link href="/">
//             <Image
//               src="/assets/image/logo-black.png"
//               alt="Netclic Logo"
//               width={100}
//               height={50}
//               className="-mt-3 h-auto w-auto object-cover"
//             />
//           </Link>
//           <span className="mx-2 text-gray-500">|</span>
//           <nav className="ml-2 hidden md:block">
//             <ul className="flex space-x-6 text-sm justify-center items-center">
//               <li>
//                 <Link href="#" className="text-gray-500 hover:text-amber-500">
//                   About us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-500 hover:text-amber-500">
//                   Services
//                   <IoMdArrowDropdown className="inline-block ml-1" />
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="text-gray-500 hover:text-amber-500">
//                   Jobs
//                 </Link>
//               </li>
//               <li>
//                 <a
//                   href="provider"
//                   className="text-gray-500 hover:text-amber-500"
//                 >
//                   Freelancers
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Account UI if provider */}
//         {type === "provider" && (
//           <div className="flex items-center">
//             <div className="mr-4 hidden md:flex items-center">
//               <Image
//                 src="/assets/image/BussinessWomen.jpg"
//                 alt="Caroline"
//                 width={800}
//                 height={800}
//                 className="h-8 w-8 bg-cover rounded-full"
//                 priority
//               />
//               <span className="ml-2 text-gray-700">Caroline</span>
//             </div>
//             <button className="hidden md:flex items-center text-amber-500 py-2 rounded-lg">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="34"
//                 height="34"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-align-left cursor-pointer"
//               >
//                 <path d="M15 12H3" />
//                 <path d="M17 18H3" />
//                 <path d="M21 6H3" />
//               </svg>
//             </button>
//           </div>
//         )}

//         {/* Sign In & Contact Buttons (hidden if token exists) */}
//         {!token && (
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               href="/signin"
//               className="flex items-center px-1 py-2 text-gray-800 font-light md:text-sm sm:px-3 sm:py-2 md:px-4 tracking-tighter md:py-2 rounded-2xl md:rounded-4xl hover:outline hover:outline-amber-500 cursor-pointer"
//             >
//               <FaRegCircleUser className="h-4 w-4 mr-1" />
//               Sign in
//             </Link>
//             <Link
//               href="#"
//               className="bg-[#1C1914] text-white px-1 py-2 font-light sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-lg md:rounded-4xl hover:text-[#F5B23D] cursor-pointer text-sm"
//             >
//               Contact us
//             </Link>
//           </div>
//         )}

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2 focus:outline-none"
//           onClick={toggleMenu}
//           aria-label="Toggle menu"
//         >
//           <div className="w-6 h-6 relative">
//             <span
//               className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out ${
//                 isMenuOpen ? "rotate-45 translate-y-2.5" : "translate-y-0"
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out translate-y-2 ${
//                 isMenuOpen ? "opacity-0" : "opacity-100"
//               }`}
//             />
//             <span
//               className={`absolute h-0.5 w-full bg-black transform transition-all duration-300 ease-in-out translate-y-4 ${
//                 isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-4"
//               }`}
//             />
//           </div>
//         </button>
//       </div>

//       {/* Mobile Menu Drawer */}
//       <div
//         className={`w-full md:hidden bg-white shadow-lg transform transition-all duration-500 ease-in-out z-50 ${
//           isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
//         }`}
//       >
//         <nav className="px-6 py-4">
//           <ul className="space-y-4">
//             <li>
//               <Link
//                 href="#"
//                 className="text-gray-500 hover:text-amber-500 block"
//               >
//                 About us
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 className="text-gray-500 hover:text-amber-500 block"
//               >
//                 Services
//                 <IoMdArrowDropdown className="inline-block ml-1" />
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#"
//                 className="text-gray-500 hover:text-amber-500 block"
//               >
//                 Jobs
//               </Link>
//             </li>
//             <li>
//               <a
//                 href="provider"
//                 className="text-gray-500 hover:text-amber-500 block"
//               >
//                 Freelancers
//               </a>
//             </li>

//             {/* Provider Account Sidebar (mobile) */}
//             {type === "provider" ? (
//               <div className="flex justify-between items-center pt-4">
//                 <div className="flex items-center" onClick={toggleDrawer}>
//                   <Image
//                     src="/assets/image/BussinessWomen.jpg"
//                     alt="Caroline"
//                     width={100}
//                     height={100}
//                     className="h-8 w-8 rounded-full"
//                     priority
//                   />
//                   <span className="ml-2 text-gray-700">Caroline</span>
//                 </div>

//                 {/* Drawer Content */}
//                 {drawerOpen && (
//                   <div
//                     className="md:hidden absolute top-0 left-0 w-full h-screen z-40"
//                     onClick={toggleDrawer}
//                   >
//                     <div
//                       className="absolute top-0 right-0 h-full w-4/5 rounded-2xl p-4 z-50 overflow-y-auto bg-white"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <ServiceProviderSidebarContent
//                         activeTab={activeTab}
//                         setActiveTab={setActiveTab}
//                         toggleDrawer={toggleDrawer}
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               !token && (
//                 <>
//                   <li className="pt-4">
//                     <Link
//                       href="/signin"
//                       className="flex items-center justify-center w-full text-gray-800 font-light text-sm px-3 py-2 rounded-4xl border border-amber-500 hover:outline hover:outline-amber-500 cursor-pointer"
//                     >
//                       <FaRegCircleUser className="h-4 w-4 mr-1" />
//                       Sign in
//                     </Link>
//                   </li>
//                   <li>
//                     <button className="w-full bg-[#1C1914] text-white py-2 px-3 rounded-4xl hover:text-[#F5B23D] cursor-pointer text-sm">
//                       Contact us
//                     </button>
//                   </li>
//                 </>
//               )
//             )}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import ServiceProviderSidebarContent from "../features/ServiceProviderSidebarContent";
import { getTokenFromCookie } from "@/lib/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const pathname = usePathname();
  const shouldShowBlogLink = pathname === "/";
  const shouldShowAccountHamberger = pathname === "/account";

  // Decode token safely
  useEffect(() => {
    const token = getTokenFromCookie();
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserInfo(decoded);
      } catch (err) {
        console.error("Invalid token:", err);
        setUserInfo(null);
      }
    }
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const isLoggedIn = !!userInfo;
  // const isProvider = userInfo?.type === "provider";
  const isProvider = userInfo;

  return (
    <header
      className={`bg-white mx-auto relative ${
        !shouldShowBlogLink ? "border-b border-gray-200" : ""
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto relative">
        {/* Left Logo & Nav */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/assets/image/logo-black.png"
              alt="Netclic Logo"
              width={100}
              height={50}
              className="-mt-3 h-auto w-auto object-cover"
            />
          </Link>
          <span className="mx-2 text-gray-500">|</span>
          <nav className="ml-2 hidden md:block">
            <ul className="flex space-x-6 text-sm items-center">
              <li>
                <Link href="#" className="text-gray-500 hover:text-amber-500">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-amber-500">
                  Services <IoMdArrowDropdown className="inline-block ml-1" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-amber-500">
                  Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/provider"
                  className="text-gray-500 hover:text-amber-500"
                >
                  Freelancers
                </Link>
              </li>
              {shouldShowBlogLink && (
                <>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-amber-500"
                    >
                      Members
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-500 hover:text-amber-500"
                    >
                      Blog
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        {/* Right: Auth or Profile */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                href="/account"
                className="flex items-center cursor-pointer"
              >
                <Image
                  src="/assets/image/BussinessWomen.jpg"
                  alt="User"
                  width={200}
                  height={200}
                  className="h-8 w-8 bg-cover rounded-full"
                  priority
                />
                <span className="ml-2 text-gray-700">
                  {userInfo?.email || "Account"}
                </span>
              </Link>
              {shouldShowAccountHamberger && (
                <button className="text-amber-500 py-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 12H3" />
                    <path d="M17 18H3" />
                    <path d="M21 6H3" />
                  </svg>
                </button>
              )}
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="flex items-center text-gray-800 text-sm px-4 py-2 rounded-2xl hover:outline hover:outline-amber-500"
              >
                <FaRegCircleUser className="h-4 w-4 mr-1" /> Sign in
              </Link>
              <Link
                href="#"
                className="bg-[#1C1914] text-white px-4 py-2 rounded-2xl hover:text-[#F5B23D] text-sm"
              >
                Contact us
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            <span
              className={`absolute h-0.5 w-full bg-black transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black transition-all translate-y-2 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-black transition-all translate-y-4 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible h-0"
        }`}
      >
        <nav className="px-6 py-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="#"
                className="text-gray-500 hover:text-amber-500 block"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-500 hover:text-amber-500 block"
              >
                Services <IoMdArrowDropdown className="inline-block ml-1" />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-500 hover:text-amber-500 block"
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/provider"
                className="text-gray-500 hover:text-amber-500 block"
              >
                Freelancers
              </Link>
            </li>
            {shouldShowBlogLink && (
              <>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-amber-500 block"
                  >
                    Members
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-500 hover:text-amber-500 block"
                  >
                    Blog
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn ? (
              <div className="flex items-center justify-between">
                <Link href='/account'>
                  <li className="flex items-center space-x-2">
                    <Image
                      src="/assets/image/BussinessWomen.jpg"
                      alt="User"
                      width={32}
                      height={32}
                      className="h-8 w-8 bg-cover rounded-full"
                    />
                    <span className="text-black">
                      {userInfo?.email || "Account"}
                    </span>
                  </li>
                </Link>
                {isProvider && (
                  <li>
                    <button
                      className="text-amber-500 py-2 cursor-pointer rounded-lg"
                      onClick={toggleDrawer}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 12H3" />
                        <path d="M17 18H3" />
                        <path d="M21 6H3" />
                      </svg>
                    </button>
                  </li>
                )}
              </div>
            ) : (
              <>
                <li>
                  <Link
                    href="/signin"
                    className="block text-gray-800 font-light text-sm px-3 py-2 rounded-4xl border border-amber-500 text-center hover:outline hover:outline-amber-500"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <button className="w-full bg-[#1C1914] text-white py-2 px-3 rounded-4xl hover:text-[#F5B23D] text-sm">
                    Contact us
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Provider Sidebar Drawer */}
        {isProvider && drawerOpen && (
          <div
            className="absolute top-0 left-0 w-full h-screen z-40 bg-opacity-20"
            onClick={toggleDrawer}
          >
            <div
              className="absolute top-0 right-0 h-full w-4/5 rounded-2xl p-4 z-50 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <ServiceProviderSidebarContent
                activeTab="profile"
                setActiveTab={() => {}}
                toggleDrawer={toggleDrawer}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
