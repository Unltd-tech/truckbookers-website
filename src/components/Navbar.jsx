import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/tbq_logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#F5D000] font-semibold"
      : "text-gray-700 hover:text-[#F5D000] transition";

  const mobileLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#F5D000] font-semibold block py-3"
      : "text-gray-700 hover:text-[#F5D000] transition block py-3";

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-50 border-b border-[#F5D000] shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Truckbookers" className="h-10 md:h-12" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/contact-us" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        <button
          type="button"
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <nav className="px-6 py-4 text-base font-medium">
            <NavLink
              to="/"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact-us"
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
