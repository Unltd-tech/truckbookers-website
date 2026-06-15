import {
  Truck,
  MapPin,
  ShieldCheck,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import truckIcon from "../assets/truck-icon.png";

function Home() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section
        className="relative text-white overflow-hidden min-h-[calc(100vh-96px)] flex items-center"
        style={{
          backgroundImage: "url('/about-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="text-[#F5D000] font-bold mb-4">
              For Qatar. By Qatar.
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Qatar’s Digital Trucking Marketplace
            </h1>

            <p className="mt-8 text-white/90 text-lg leading-8 max-w-xl">
              Connecting businesses, fleet operators, and drivers through a
              smarter, faster, and more transparent logistics platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about-us"
                className="border border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="relative max-w-[420px] mx-auto w-full">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F5D000] rounded-full blur-3xl opacity-40"></div>

            <div className="relative bg-black rounded-[2rem] p-5 shadow-2xl">
              <div className="bg-white rounded-[1.5rem] overflow-hidden">
                <div className="bg-[#F5D000] px-5 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-black">
                      Live Dispatch
                    </p>
                    <h3 className="text-xl font-extrabold text-black">
                      Fleet Control Center
                    </h3>
                  </div>
                  <img
                    src={truckIcon}
                    alt="Truck"
                    className="w-8 h-8 object-contain"
                  />{" "}
                </div>

                <div className="p-5 space-y-5">
                  <div className="bg-[#FAFAFA] rounded-2xl p-4 border">
                    <div className="flex items-center justify-between mb-4">
                      <p className="font-bold text-black">Qatar Route Map</p>
                      <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                        Active
                      </span>
                    </div>

                    <div className="relative h-44 bg-[#FFFBE6] rounded-xl overflow-hidden border">
                      <div className="absolute top-6 left-8 w-3 h-3 bg-black rounded-full"></div>
                      <div className="absolute bottom-8 right-10 w-3 h-3 bg-[#F5D000] rounded-full border border-black"></div>
                      <div className="absolute top-20 left-20 w-40 h-[3px] bg-black rotate-12 origin-left"></div>

                      <div className="absolute top-3 right-3 bg-white rounded-xl px-3 py-2 shadow text-xs font-semibold text-black">
                        Doha → Industrial Area
                      </div>

                      <div className="absolute bottom-4 left-4 bg-black text-white rounded-xl px-3 py-2 text-xs">
                        ETA: 28 min
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ["42", "Active Trips"],
                      ["18", "Available Trucks"],
                      ["96%", "On-Time"],
                    ].map(([number, label]) => (
                      <div
                        key={label}
                        className="bg-[#FAFAFA] border rounded-2xl p-3"
                      >
                        <p className="text-xl font-extrabold text-black">
                          {number}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-black text-white rounded-2xl p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-gray-400">Assigned Vehicle</p>
                      <p className="font-bold">Flatbed Truck · TBQ-204</p>
                    </div>
                    <span className="bg-[#F5D000] text-black px-3 py-1 rounded-full text-xs font-bold">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-24 bg-[#FFFBE6]">
        <div className="max-w-[1250px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[#F5D000] text-2xl font-bold mb-3">
              The Challenge
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Commercial transport still runs on manual coordination
            </h2>

            <p className="mt-5 text-gray-700 leading-8">
              Many businesses still depend on calls, brokers, WhatsApp updates,
              and manual paperwork to move goods across Qatar.
            </p>
          </div>

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 border shadow-sm">
              <p className="text-sm font-bold text-[#F5D000] mb-4">
                MARKET GAP
              </p>

              <h3 className="text-2xl md:text-3xl font-bold">
                Finding the right truck at the right time is still harder than
                it should be.
              </h3>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                {[
                  "No central truck availability",
                  "Manual price negotiations",
                  "Limited delivery visibility",
                  "Paper-based job records",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-[#FAFAFA] rounded-2xl p-4"
                  >
                    <span className="w-3 h-3 rounded-full bg-[#F5D000]"></span>
                    <p className="font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-black text-white rounded-3xl p-8 shadow-xl">
              <p className="text-sm font-bold text-[#F5D000] mb-4">
                THE IMPACT
              </p>

              <div className="space-y-7">
                {[
                  [
                    "Time Lost",
                    "Repeated calls and manual follow-ups slow down operations.",
                  ],
                  [
                    "Higher Cost",
                    "Unclear pricing increases disputes and supply chain cost.",
                  ],
                  [
                    "Low Trust",
                    "Lack of tracking makes delivery updates difficult to verify.",
                  ],
                ].map(([title, desc]) => (
                  <div key={title}>
                    <h4 className="text-xl font-bold">{title}</h4>
                    <p className="mt-2 text-gray-300 text-sm leading-6">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-black rounded-3xl p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-[#F5D000] font-bold mb-2">THE SOLUTION </p>
              <h3 className="text-2xl md:text-3xl font-bold">
                A unified digital platform for booking, tracking, and managing
                commercial vehicles.
              </h3>
            </div>

            <div className="bg-[#F5D000] text-black px-6 py-4 rounded-2xl font-bold whitespace-nowrap">
              Built for Qatar
            </div>
          </div>
        </div>
      </section>

      {/* Platform Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Simplifying Commercial Transport Across Qatar
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            TruckBookers helps customers book verified commercial vehicles while
            enabling fleet owners to increase utilization and grow their
            business.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              [Truck, "Commercial Vehicle Booking"],
              [MapPin, "Real-Time Tracking"],
              [ShieldCheck, "Verified Fleet Network"],
              [BarChart3, "Fleet Analytics"],
            ].map(([Icon, title]) => (
              <div
                key={title}
                className="p-6 rounded-2xl border bg-white shadow-sm hover:border-[#F5D000] hover:shadow-md transition"
              >
                <Icon className="mx-auto text-[#F5D000]" size={38} />
                <h3 className="mt-4 font-bold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-[#F5D000] text-2xl font-bold text-center mb-3">
            Industries We Serve
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Built For Qatar's Growing Economy
          </h2>

          <div className="grid md:grid-cols-5 gap-6 mt-12">
            {[
              [
                "🏗",
                "Construction",
                "Transport materials, machinery, and project equipment.",
              ],
              [
                "🏭",
                "Manufacturing",
                "Reliable movement of industrial goods and supplies.",
              ],
              [
                "🚢",
                "Logistics",
                "Fleet support for freight and distribution operations.",
              ],
              ["🏬", "Retail", "Fast and dependable commercial deliveries."],
              [
                "🏛",
                "Infrastructure",
                "Support for national and private development projects.",
              ],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                className="bg-white border rounded-2xl p-6 hover:border-[#F5D000] transition shadow-sm"
              >
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-3 text-gray-600 text-sm leading-6">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <p className="text-[#F5D000] text-2xl font-bold mb-3">
            Platform Ecosystem
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            One Platform. Multiple Stakeholders.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {" "}
            {["Customers", "Drivers", "Fleet Owners"].map((item) => (
              <div
                key={item}
                className="bg-[#FAFAFA] p-6 rounded-2xl border shadow-sm"
              >
                <h3 className="font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TruckBookers */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#F5D000] font-bold mb-4">Why TruckBookers?</p>

            <h2 className="text-3xl md:text-4xl font-bold">
              Built for Qatar’s Modern Logistics Needs
            </h2>

            <p className="mt-5 text-gray-300 leading-8">
              From transparent pricing to verified fleet onboarding,
              TruckBookers brings structure, visibility, and efficiency to
              Qatar’s commercial vehicle ecosystem.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Verified drivers and fleet operators",
              "Transparent booking and pricing process",
              "Real-time tracking and delivery visibility",
              "Digital invoices and trip records",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="text-[#F5D000]" size={22} />
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-[#FFFBE6]">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <p className="text-[#F5D000] font-bold mb-3">Future Vision</p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Building Qatar's Logistics Intelligence Layer
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            TruckBookers aims to become Qatar's leading commercial vehicle
            marketplace by combining fleet aggregation, real-time tracking,
            route optimization, and data-driven logistics planning.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5D000] text-black text-center">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Move Smarter?
          </h2>

          <p className="mt-4 text-black/70">
            Contact TruckBookers today for bookings, partnerships, and business
            enquiries.
          </p>

          <Link
            to="/contact-us"
            className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
