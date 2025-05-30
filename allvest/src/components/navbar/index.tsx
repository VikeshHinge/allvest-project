import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Why Choose Us?",
      href: "why-choose-us",
      path: "WhyChooseAllvest",
    },
    { label: "Features", href: "features", path: "features" },
    { label: "How it Works?", href: "how-it-works", path: "" },
    { label: "About Us", href: "about-us", path: "" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#141a14] backdrop-blur-md border-b border-gray-800/20"
            : "bg-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center py-0.5 px-5 lg:px-10 ">
          <div className="p-2">
            <img src={Logo} alt="Logo" className="w-auto h-15 lg:h-28" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex justify-around gap-5 w-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-[#99cc19] transition-colors duration-200 text-base font-medium"
              >
                <Link to={item?.path} smooth={true} duration={600} offset={-70}>
                  {item.label}
                </Link>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-[#99cc19] hover:bg-gray-800/20 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <Menu className="h-6 w-6" color="#99cc19" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-20 left-0 right-0 bg-[#141a14] backdrop-blur-md border-b-3 border-[#99cc19] rounded-b-[12vw] overflow-hidden transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-4 pt-6 pb-6 space-y-6 md:flex md:justify-around">
            {navItems.map((item) => (
              <p
                key={item.label}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center text-base font-sm text-gray-300 hover:text-[#99cc19] transition-colors duration-200 py-2"
              >
                <Link to={item?.path} smooth={true} duration={600} offset={-70}>
                  {item.label}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
