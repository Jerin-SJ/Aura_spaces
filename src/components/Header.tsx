import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import imgAuraSpacesLogo from "figma:asset/7383c0b13d545b56ad3dee2f9b60d49a9532f19c.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Close mobile menu when scrolling into compact mode
  useEffect(() => {
    if (isScrolled && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isScrolled]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 lg:px-10 lg:pt-6"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="backdrop-blur-xl backdrop-saturate-150 bg-[#696A5A]/70 rounded-full border border-[#EEE7D2]/10 shadow-lg relative"
        style={{
          padding: isScrolled ? "8px 20px" : "12px 32px",
          maxWidth: isScrolled ? "160px" : "100%",
          width: isScrolled ? "auto" : "auto",
          margin: "0 auto",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "auto",
        }}
      >
        <div
          className="flex items-center"
          style={{
            justifyContent: isScrolled ? "center" : "space-between",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            className="cursor-pointer flex-shrink-0 hover:opacity-80"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src={imgAuraSpacesLogo}
              alt="Aura Spaces"
              style={{
                height: isScrolled ? "36px" : "40px",
                width: "auto",
                transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <div
            className="hidden md:flex items-center gap-1 overflow-hidden"
            style={{
              maxWidth: isScrolled ? "0px" : "600px",
              opacity: isScrolled ? 0 : 1,
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <a
              href="#about"
              className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 px-5 py-2 whitespace-nowrap"
              style={{
                fontFamily: "Parkinsans, var(--font-heading), sans-serif",
                fontSize: "15px",
              }}
            >
              About Us
            </a>
            <a
              href="#price-estimator"
              className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 px-5 py-2 whitespace-nowrap"
              style={{
                fontFamily: "Parkinsans, var(--font-heading), sans-serif",
                fontSize: "15px",
              }}
            >
              Price Estimator
            </a>
            <a
              href="#aura-decor"
              className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 px-5 py-2 whitespace-nowrap"
              style={{
                fontFamily: "Parkinsans, var(--font-heading), sans-serif",
                fontSize: "15px",
              }}
            >
              Aura Decor
            </a>
            <a
              href="#contact"
              className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 px-5 py-2 whitespace-nowrap"
              style={{
                fontFamily: "Parkinsans, var(--font-heading), sans-serif",
                fontSize: "15px",
              }}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#EEE7D2] p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            style={{
              opacity: isScrolled ? 0 : 1,
              pointerEvents: isScrolled ? "none" : "auto",
              transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 mx-0">
            <div className="backdrop-blur-xl bg-[#696A5A]/95 rounded-3xl border border-[#EEE7D2]/10 shadow-2xl p-6">
              <div className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 py-2"
                  style={{ fontFamily: "Parkinsans, var(--font-heading), sans-serif" }}
                  onClick={closeMobileMenu}
                >
                  About Us
                </a>
                <a
                  href="#price-estimator"
                  className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 py-2"
                  style={{ fontFamily: "Parkinsans, var(--font-heading), sans-serif" }}
                  onClick={closeMobileMenu}
                >
                  Price Estimator
                </a>
                <a
                  href="#aura-decor"
                  className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 py-2"
                  style={{ fontFamily: "Parkinsans, var(--font-heading), sans-serif" }}
                  onClick={closeMobileMenu}
                >
                  Aura Decor
                </a>
                <a
                  href="#contact"
                  className="text-[#EEE7D2] hover:text-[#D97A43] transition-all duration-300 py-2"
                  style={{ fontFamily: "Parkinsans, var(--font-heading), sans-serif" }}
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}