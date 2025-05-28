import { VscFoldDown } from "react-icons/vsc";
import { MdArrowOutward } from "react-icons/md";
import { Tab } from "../../../components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const tabVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

const HeroSection = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative py-32 lg:py-64 flex items-center justify-center text-white overflow-hidden bg-[#1a2e1a]">
      <img
        src="https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67caeae0778752ffb12a1c69_graphic-background-min-p-2000.jpeg"
        alt="Background"
        className="absolute inset-0 w-full lg:h-full object-cover opacity-45 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e1a] via-transparent to-[#1a2e1a] z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-20" />

      <div className="z-30 flex lg:w-[85%]">
        {/* Left-side Tabs */}
        <div className="h-full hidden md:hidden lg:flex flex-col gap-[300px]">
          {[
            "One Platform Multiple Investment",
            "Simplified Multi-Asset Allocation",
          ].map((title, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={tabVariant}
            >
              <Tab title={title} />
            </motion.div>
          ))}
        </div>

        {/* Center Text */}
        <div className="text-center px-4 mx-auto">
          <h1 className="text-3xl lg:text-6xl font-extrabold leading-tight">
            Invest <span className="text-primary">Smart</span>
            <br />
            Reap <span className="text-primary">Big</span>
          </h1>

          <p className="mt-6 text-gray-300 w-[80%] lg:w-[400px] lg:mt-16 mx-auto text-sm">
            Effortlessly manage and grow your wealth with AllVest, the ultimate
            investment platform designed for modern investors. With AI-powered
            insights, tailored strategies, and seamless investment management,
            you can maximize returns while minimizing risks—all in one place.
          </p>
          <Link to="WhyChooseAllvest" smooth={true} duration={600} offset={-70}>
            <button className="border border-white rounded-full mt-12 w-10 h-10 lg:w-20 lg:h-20 lg:mt-24 flex items-center justify-center mx-auto">
              <div className="animate-bounce">
                <VscFoldDown className="lg:text-2xl" />
              </div>
            </button>
          </Link>
          {/* Tabs --- Mobile*/}
          <div className="mt-10 flex flex-wrap flex-row justify-center items-center gap-3 lg:hidden">
            {[
              "One Platform Multiple Investment",
              "AI-led Data driven Insights & Research",
              "Simplified Multi-Asset Allocation",
            ].map((title, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={tabVariant}
              >
                <Tab title={title} />
              </motion.div>
            ))}
          </div>


          <div className="lg:hidden space-y-2 mt-5" onClick={scrollToBottom}>
            <p className="mt-3 text-lg text-gray-400">
              One Platform, Endless Possibilities
            </p>
            <div className="flex justify-center items-baseline gap-2">
              <button className="text-2xl text-black bg-primary h-fit p-1 px-7 border-2 border-white rounded-full hover:bg-transparent">
                Download
              </button>
              <button className="border border-primary rounded-full flex items-center justify-center p-3 transition-transform duration-300 hover:-translate-y-3 hover:translate-x-3">
                <MdArrowOutward fontSize={"25px"} color="#99cc19" />
              </button>
            </div>
          </div>
        </div>

        {/* Right-side */}
        <div className="h-full hidden md:hidden lg:flex flex-col gap-[300px]">
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={tabVariant}
          >
            <Tab title="One Platform Multiple Investment" />
          </motion.div>

          <button onClick={scrollToBottom}>
            <div className="flex justify-center items-baseline gap-2">
              <div className="text-2xl text-black bg-[#99cc19] h-fit p-1 px-7 border-2 border-white rounded-full hover:text-[#99cc19] hover:border-[#99cc19] hover:bg-transparent duration-300">
                Download
              </div>
              <div className="border border-primary rounded-full lg:w-16 lg:h-16 flex items-center justify-center transition-transform duration-300 hover:-translate-y-3 hover:translate-x-3">
                <MdArrowOutward fontSize={"25px"} color="#99cc19" />
              </div>
            </div>
            <p className="mt-3 text-lg text-gray-400">
              One Platform, Endless Possibilities
            </p>
          </button>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
