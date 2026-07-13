import { Link } from "react-router-dom";
import logo from "../assets/tbq_logo.svg";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="Truckbookers" className="h-12 mb-4" />

          <p className="text-gray-400 leading-7">
            Truckbookers contributes to Qatar's Vision 2030 objectives of
            economic diversification, digital transformation and sustainable
            development while strengthening the resilience and competitiveness
            of the national logistics sector.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#F5D000] font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="text-gray-400 hover:text-[#F5D000] transition"
            >
              Home
            </Link>

            <Link
              to="/about-us"
              className="text-gray-400 hover:text-[#F5D000] transition"
            >
              About Us
            </Link>

            <Link
              to="/contact-us"
              className="text-gray-400 hover:text-[#F5D000] transition"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-[#F5D000] transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-[#F5D000] transition"
            >
              Terms of Service
            </Link>

            <Link
              to="/data-deletion"
              className="text-gray-400 hover:text-[#F5D000] transition"
            >
              Data Deletion
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#F5D000] font-semibold text-lg mb-4">Contact</h3>

          <div className="space-y-3 text-gray-400">
            <p>info@truckbookers.com</p>
            <p>+974 30501657</p>
            <p>Doha, Qatar</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F5D000]/20">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Truckbookers. All rights reserved.
          </p>

          <p className="text-sm text-gray-500">
            For Qatar. <span className="text-[#F5D000]">By Qatar.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
