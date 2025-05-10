
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="bg-white  px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">
          How <span className="text-[#DAA664]">Net</span>clic Works?
        </h2>
        <p className="text-gray-500 text-center font-medium text-sm mb-10">
          Each listing is designed to be clear and concise, providing customers
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-full md:w-1/4 relative p-6 bg-white border-2 border-[#E8E3E3] rounded-2xl">
            <div className="absolute -top-10 right-5 text-[#E8E3E3] bg-white text-6xl font-[1000]">
              01
            </div>
            <div className="relative z-10">
              <h3 className="text-[#DAA664] text-2xl font-extrabold mb-2">
                Post a<br />
                Service
              </h3>
              <p className="text-sm text-gray-500">
                After you post a job, our matching system identifies and alerts
                relevant Provider, who can then express interest in your job.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/4 relative p-6 bg-white border-2 border-[#E8E3E3] rounded-2xl">
            <div className="absolute -top-10 right-5 text-[#E8E3E3] bg-white text-6xl font-[1000]">
              02
            </div>
            <div className="relative z-10">
              <h3 className="text-[#DAA664] text-2xl font-extrabold mb-2">
                Getting Booked
                <br />& Job done
              </h3>
              <p className="text-sm text-gray-500">
                After you post a job, our matching system identifies and alerts
                relevant Provider, who can then express interest in your job.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/4 relative p-6 bg-white border-2 border-[#E8E3E3] rounded-2xl">
            <div className="absolute -top-10 right-5 text-[#E8E3E3] bg-white text-6xl font-[1000]">
              03
            </div>
            <div className="relative z-10">
              <h3 className="text-[#DAA664] text-2xl font-extrabold mb-2">
                Get Reviewd
                <br />& Get Leads
              </h3>
              <p className="text-sm text-gray-500">
                After you post a job, our matching system identifies and alerts
                relevant Provider, who can then express interest in your job.
              </p>
            </div>
          </div>
        </div>

        <div className="-mt-5 md:ml-30 flex justify-center">
          <div className="relative">
            <Image
              src="/assets/image/Girl-with-laptop.png"
              alt="Laptop with Netclic"
              width={600}
              height={600}
              className="h-56 md:h-96 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
