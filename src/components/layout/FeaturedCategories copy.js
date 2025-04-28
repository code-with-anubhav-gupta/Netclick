// // components/FeaturedCategories.js
// 'use client';
// import Image from 'next/image';
// import { images } from '../../../public/assets/image/index.js';

// const categories = [
//   { name: 'Plumber', available: 20, image: images.Plumber },
//   { name: 'Car Wash', available: 25, image: images.CarWash },
//   { name: 'Car Wash', available: 20, image: images.CarWash },
//   { name: 'Home Cleaner', available: 25, image: images.Cleaner },
//   { name: 'Carpenter', available: 20, image: images.Carpainter },
//   { name: 'Plumber', available: 20, image: images.Plumber },
//   { name: 'Car Wash', available: 25, image: images.CarWash },
//   { name: 'Car Wash', available: 20, image: images.CarWash },
//   { name: 'Home Cleaner', available: 25, image: images.Cleaner },
//   { name: 'Carpenter', available: 20, image: images.Carpainter },
// ];

// const FeaturedCategories = () => {
//   return (
//     <section className="max-w-7xl relative mx-auto my-12 px-24">
//         <div className="flex justify-between items-center mb-6">
//           <div className='md:w-full md:flex md:flex-col md:justify-center md:items-center'>
//             <h2 className="text-xl md:text-4xl font-bold">Featured Categories</h2>
//             <p className="text-gray-500 text-sm">Get some inspirations from 500+ skills</p>
//           </div>
//           <a href="#" className="text-sm flex items-center text-gray-700 md:absolute md:top-6 md:right-5">
//             More Services 
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </a>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
//           {categories.map((category, index) => (
//             <div key={index} className="bg-gray-50 py-15 rounded-lg text-center hover:shadow-md hover:bg-orange-300 transition-shadow">
//               <div className="w-24 h-24 mx-auto mb-3 rounded-lg flex items-center justify-center">
//                 <Image
//                 src={category.image} 
//                 alt={category.name}
//                 width={300}                                                                                                                            
//                 height={400}
//                 // className='w-full h-20 '
//                 />
//               </div>
//               <h3 className="font-medium">{category.name}</h3>
//               <p className="text-xs text-gray-500">{category.available} skills available</p>
//             </div>
//           ))}
//         </div>
//       </section>
//   );
// };

// export default FeaturedCategories;


'use client';
import Image from 'next/image';
import { images } from '../../../public/assets/image/index.js';

const categories = [
  { name: 'Plumber', available: 20, image: images.Plumber },
  { name: 'Car Wash', available: 25, image: images.CarWash },
  { name: 'Car Wash', available: 20, image: images.CarWash },
  { name: 'Home Cleaner', available: 25, image: images.Cleaner },
  { name: 'Carpenter', available: 20, image: images.Carpainter },
  { name: 'Plumber', available: 20, image: images.Plumber },
  { name: 'Car Wash', available: 25, image: images.CarWash },
  { name: 'Car Wash', available: 20, image: images.CarWash },
  { name: 'Home Cleaner', available: 25, image: images.Cleaner },
  { name: 'Carpenter', available: 20, image: images.Carpainter },
];

const FeaturedCategories = () => {
  return (
    <section className="max-w-7xl mx-auto my-12 px-4 md:px-24 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center mb-6">
        <div></div>
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold">Featured Categories</h2>
          <p className="text-gray-500 text-sm">Get some inspirations from 500+ skills</p>
        </div>
        <div className="flex justify-end mt-4 md:mt-0">
          <a
            href="#"
            className="text-sm flex items-center text-gray-700"
          >
            More Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-50 py-10 rounded-lg text-center hover:shadow-md hover:bg-orange-300 transition-shadow"
          >
            <div className="w-24 h-24 mx-auto mb-3 rounded-lg flex items-center justify-center">
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={300}
              />
            </div>
            <h3 className="font-medium ">{category.name}</h3>
            <p className="text-xs text-gray-500">{category.available} skills available</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
