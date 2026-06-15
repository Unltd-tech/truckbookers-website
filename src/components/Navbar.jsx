import { Link, NavLink } from "react-router-dom";
import logo from "../assets/tbq_logo.svg";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#F5D000] font-semibold"
      : "text-gray-700 hover:text-[#F5D000] transition";

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-50 border-b border-[#F5D000] shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="TruckBookers"
            className="h-10 md:h-12"
          />
        </Link>

        {/* Navigation */}
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

      </div>
    </header>
  );
}

export default Navbar;