"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { images } from "../../../public/assets/image/index";

const Footer = () => {
  const pathname = usePathname();
  const footer = pathname === "/";
  return (
    <>
      {footer ? (
        <footer className="bg-white py-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-5 md:px-24 flex justify-between items-center">
            <p className="text-[0.6rem] sm:text-sm text-gray-500">
              Copyright © 2025 netclic All Rights Reserved.
            </p>
            <div className="flex justify-center items-center">
              <Link href="#">
                <Image
                  src={images.Facebook}
                  alt="Facebook"
                  height={45}
                  width={45}
                  className="object-cover"
                />
              </Link>
              <Link href="#">
                <Image
                  src={images.Instagram}
                  alt="Facebook"
                  height={25}
                  width={25}
                  className="object-cover"
                />
              </Link>
              <Link href="#">
                <Image
                  src={images.Whatsapp}
                  alt="Facebook"
                  height={45}
                  width={45}
                  className="object-cover"
                />
              </Link>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="bg-gray-50 py-12 border-t border-gray-200 text-black -mt-5 md:mt-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div>
                <div className=" ml-3 flex items-center mb-4">
                  <span className="text-2xl font-bold text-amber-500">net</span>
                  <span className="text-2xl font-bold text-gray-800">clic</span>
                </div>
                <div className="flex items-center mb-4">
                  <Link href="#">
                    <Image
                      src={images.Facebook}
                      alt="Facebook"
                      height={50}
                      width={50}
                      className="object-cover"
                      priority
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={images.Instagram}
                      alt="Facebook"
                      height={28}
                      width={28}
                      className="object-cover"
                      priority
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={images.Whatsapp}
                      alt="Facebook"
                      height={50}
                      width={50}
                      className="object-cover"
                      priority
                    />
                  </Link>
                </div>
                <p className="ml-3 text-xs text-gray-500 mt-6">
                  Copyright © 2025 netclic
                  <br />
                  All Rights Reserved.
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-4">Discover</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Request a service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Find a job
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Become a service provider
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Mobile application
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Jobber mobile application
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Yoojo Direct
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Customer reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Invite friends{" "}
                      <span className="bg-blue-500 text-white text-center text-xs px-2 py-0.5 rounded-full ml-1">
                        New
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      CESU tickets
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Gift cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Who are we ?
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4">Useful information</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Yoojo Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Tax credit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Trust and security
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      VIP Status
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Business Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      FAQ personal services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      General customer conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900 tracking-tighter"
                    >
                      General conditions of the service provider
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mt-9"></h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Cookie management
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Youpijob becomes Yoojo
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Spelling and pronunciation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Understand everything about Jobbing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-4">Download the mobile app</h4>
                <div className="flex space-x-2">
                  <Link href="#">
                    <Image
                      src={images.Apple}
                      width={900}
                      height={900}
                      alt="App Store"
                      className="bg-cover md:rounded-lg"
                      priority
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      src={images.Google}
                      width={900}
                      height={900}
                      alt="Google Play"
                      className="bg-cover md:rounded-lg"
                      priority
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
