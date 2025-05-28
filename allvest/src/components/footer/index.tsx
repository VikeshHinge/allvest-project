import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { X } from "lucide-react";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStoreClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="flex relative flex-col justify-center items-center text-white px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Start Your Smart Investment Journey Today!
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-xl text-center">
          Join AllVest and take control of your financial future.
        </p>

        <button className="button-primary">Sign Up Now</button>

        <p className="mb-4 font-medium">or download it from</p>
        <div className="flex space-x-5 justify-center items-center mb-12">
          <button
            onClick={handleStoreClick}
            className="rounded-lg shadow-md hover:scale-125 transform transition duration-300 delay-150"
          >
            <img
              src="https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67c9ea19babd3c136dc74288_PlayStore.svg"
              alt="Google Play Store"
              className="h-12 sm:"
            />
          </button>
          <button
            onClick={handleStoreClick}
            className="rounded-lg shadow-md hover:scale-125 transform transition duration-300 delay-150"
          >
            <img
              src="https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67c9ea18b05495d3b59da91d_AppStore.svg"
              alt="Apple App Store"
              className="h-12"
            />
          </button>
        </div>

        <img
          src="https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67c9e75eadc0918387bc0e69_Graphic.svg"
          alt="Decorative graphic"
          className="absolute w-full bottom-16 md:bottom-0 right-0 opacity-20 pointer-events-none select-none"
        />
      </div>

      {/* Contact Section */}
      <div className="flex justify-between flex-col md:flex-row items-center md:w-[90%] m-auto p-3">
        <img src={Logo} alt="Logo" className="w-auto h-20 md:h-28" />
        <div className="md:space-y-2 text-center mt-4 md:mt-0">
          <p className="text-primary text-2xl font-extrabold md:text-5xl">
            Contact us
          </p>
          <p className="text-gray-400 text-sm md:text-2xl">
            contact@allvest.co
          </p>
        </div>
      </div>
      <div className="border-t-1 border-[#99cc19]" />

      <div className="flex gap-3 justify-between flex-col md:flex-row items-center m-auto p-3 border-t-1 md:w-[90%] py-10">
        <div className="flex justify-center gap-5 text-white">
          <p className="hover:text-[#99cc19]">Privacy Policy</p>
          <p className="hover:text-[#99cc19]">Term of Conditions</p>
        </div>
        <p className="font-semibold text-xs md:text-sm text-white">
          © 2025, Allvest Securities Pvt. Ltd . All rights reserved
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed bottom-20 left-0 right-0 flex justify-center z-50">
          <div className="bg-white rounded-xl relative overflow-hidden w-[90%] md:w-fit p-0.5">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-black z-10"
              aria-label="Close Modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-[#30372a] rounded-xl p-6 text-white">
              <div className="m-automd:text-5xl font-bold mb-2 flex gap-2 justify-center mt-5">
                <h1 className="text-3xl md:text-4xl text-[#99cc19]">We are</h1>
                <h1 className="text-3xl md:text-4xl">coming soon!</h1>
              </div>
              <p className="md:text-2xl text-center font-bold mb-4">
                Stay tuned for something amazing
              </p>
              <img
                src="https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67d2a644394faae9741a362e_Coming-Soon.svg"
                alt="Coming soon"
                className="mx-auto w-[50%]"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
