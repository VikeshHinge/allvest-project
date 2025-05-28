
import { motion } from "framer-motion";
import { Element } from "react-scroll";

const Features = () => {
  const data = [
    {
      id: 1,
      title: "Portfolio Overview",
      description:
        "Track stocks, mutual funds, derivatives, and alternative assets.",
      image:
        "https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67da8635bc297f6e76d862e3_TEST2.webp",
    },
    {
      id: 2,
      title: "AI-Powered Smart AllVest",
      description: "Get personalized investment recommendations.",
      image:
        "https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67da8588905e238e1d37db37_TEST-p-2000.webp",
    },
    {
      id: 3,
      title: "Tailored Investment Strategies",
      description: "Optimize for higher growth with expert insights.",
      image:
        "https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67da71eb32544f360ad37cc3_Image%203.webp",
    },
    {
      id: 4,
      title: "Seamless Trading & Management",
      description: "Buy, sell, and rebalance effortlessly.",
      image:
        "https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67da71eb233be3d597788c18_Image%204.webp",
    },
    {
      id: 5,
      title: "Live Market Trends & Alerts",
      description: "Stay informed and act at the right moment.",
      image:
        "https://cdn.prod.website-files.com/67c8393507c6a7eae2efd881/67da8635bc297f6e76d862e3_TEST2.webp",
    },
  ];

  return (
    <Element name="features">
      <div className="px-6 w-[95%] py-12 m-auto">
        <h1 className="header text-3xl py-10 lg:text-5xl mb-8 text-center lg:my-16">
          Features at Glance
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-9 gap-4">
          {data.map((item) => {
            let colSpanClass = "lg:col-span-3";
            if (item.id === 1) colSpanClass = "lg:col-span-4";
            else if (item.id === 2) colSpanClass = "lg:col-span-5";

            return (
              <motion.div
                key={item.id}
                className={`rounded-2xl p-[0.5px] bg-radial-[at_25%_25%] from-white to-zinc-900 to-90% ${colSpanClass}`}
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="bg-black h-64 w-full object-cover opacity-95"
                  />
                  <div className="text-white p-4 pb-6 bg-black">
                    <h3 className="font-semibold text-md mb-1">{item.title}</h3>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Features;
