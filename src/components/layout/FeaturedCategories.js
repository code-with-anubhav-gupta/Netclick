// // components/FeaturedCategories.js
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "../../../public/assets/image/index.js";

const categories = [
  { name: "Plumber", available: 20, image: images.Plumber },
  { name: "Car Wash", available: 20, image: images.CarWash },
  { name: "Electrician", available: 20, image: images.Electrician },
  { name: "Home Cleaner", available: 20, image: images.Cleaner },
  { name: "Carpenter", available: 20, image: images.Carpainter },
  // { name: "Plumber", available: 20, image: images.Plumber },
  // { name: "Car Wash", available: 25, image: images.CarWash },
  // { name: "Car Wash", available: 20, image: images.CarWash },
  // { name: "Home Cleaner", available: 25, image: images.Cleaner },
  // { name: "Carpenter", available: 20, image: images.Carpainter },
];

const FeaturedCategories = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 px-4 md:px-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-6">
        <div></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-xl font-[600] md:text-4xl">
            Featured Categories
          </h2>
          <p className="text-gray-500 mt-3 font-medium text-sm">
            Get some Inspirations from 50K+ skills
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-end mt-4 md:mt-0"
        >
          <motion.a
            href="#"
            className="text-sm flex items-center font-bold text-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Services
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 25 25"
              stroke="currentColor"
              // animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-sm:gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fdba74",
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 1.05,
              backgroundColor: "#fdba74",
              transition: { duration: 1 },
            }}
            className="bg-gray-50 py-10 rounded-lg text-center hover:shadow-md transition-shadow"
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-3 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={300}
              />
            </motion.div>
            {/* <span className="flex flex-col justify-start items-center bg-amber-400">
              <h3 className="font-bold">{category.name}</h3>
              <p className="text-xs text-gray-500">
                {category.available} Skills Available
              </p>
            </span> */}
            <span className="flex justify-center items-center">
              <div className="flex flex-col items-start text-left">
                <h3 className="font-bold">{category.name}</h3>
                <p className="text-xs text-gray-500">
                  {category.available} Skills Available
                </p>
              </div>
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedCategories;
