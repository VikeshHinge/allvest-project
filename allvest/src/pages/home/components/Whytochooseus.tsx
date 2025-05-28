
import { homeImages } from "../../../assets";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const content = [
  {
    id: "01",
    img: homeImages.homeimg1,
    title: "Simplify.  Accelerate. Succeed.",
    subtitle:
      "Effortlessly manage and grow all your investments in one powerful app",
  },
  {
    id: "02",
    img: homeImages.homeimg2,
    title: "AI-driven, human-centered",
    subtitle:
      "Risk-managed portfolios crafted to outperform and deliver stronger returns",
  },
  {
    id: "03",
    img: homeImages.homeimg3,
    title: "Your journey to greater returns starts here",
    subtitle: "Intelligent insights for higher growth and optimal returns",
  },
  {
    id: "04",
    img: homeImages.homeimg4,
    title: "Your journey to greater returns starts here",
    subtitle: "Join us today and take control of your financial future",
  },
];

const WhyToChooseUs = () => {
  return (
    <Element name="WhyChooseAllvest">
      <div className="space-y-5 px-4 py-8 md:px-6 md:w-[90%] mx-auto md:space-y-10 relative">
        <h1 className="header text-3xl py-10 lg:text-5xl mb-8 text-center lg:my-16">
          Why Choose Allvest?
        </h1>

        {content?.map((ele, index) => {
          const isEven = index % 2 === 0;
          const motionX = isEven ? -150 : 150;

          return (
            <div
              key={ele.id}
              className={`flex flex-col justify-around lg:flex-row space-y-3 ${
                isEven ? "lg:flex-row-reverse" : ""
              } gap-6 lg:p-4`}
            >
              {/* Text Content */}
              <div className="w-fit m-auto flex gap-6 md:gap-3 lg:mt-30 lg:items-baseline text-left lg:w-1/2 space-y-2 lg:m-0">
                <h1 className="text-primary text-4xl lg:text-5xl font-bold">
                  {ele.id}
                </h1>
                <div>
                  <h1 className="text-heading text-2xl lg:text-4xl font-semibold">
                    {ele.title}
                  </h1>
                  <h3 className="text-secondary text-base lg:text-lg font-medium mt-2 lg:w-[80%]">
                    {ele.subtitle}
                  </h3>
                </div>
              </div>

              {/* Image */}
              <motion.div
                className="lg:w-[320px] h-fit"
                initial={{ opacity: 0, x: motionX }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <img
                  src={ele.img}
                  alt="why us"
                  className="w-[35%] my-10 lg:w-full m-auto h-auto object-cover rounded-md shadow-md"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </Element>
  );
};

export default WhyToChooseUs;
