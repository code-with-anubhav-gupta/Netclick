import Link from "next/link";
import Image from "next/image";
import { images } from "../../../public/assets/image";
const ServiceCategory = () => {
  
  const serviceCategories = [
    { image: images.Plumber, title: "Plumber" },
    { image: images.Electrician, title: "Electrician" },
    { image: images.CarWash, title: "Car Wash" },
    { image: images.Cleaner, title: "Home Cleaner" },
    { image: images.Carpainter, title: "Carpenter" },
  ];

  return (
    <div className="mb-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {serviceCategories.map((category, index) => (
          <Link key={index} href={`/services/${category.title.toLowerCase().replace(/\s+/g, "-")}`}>
            <span className="flex flex-col items-center justify-center min-w-[80px] p-3 hover:shadow-2xl">
              <Image
                src={category.image}
                alt={category.title}
                className="h-24 w-24 object-cover"
              />
              <span className="text-xs text-gray-800 text-center">{category.title}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategory;
