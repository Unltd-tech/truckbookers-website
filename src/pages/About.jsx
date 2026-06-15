import { Truck, MapPin, ShieldCheck } from "lucide-react";
function About() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#FFFBE6]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFBE6] via-white to-[#F5D000]/10"></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div>
            <p className="text-[#F5D000] uppercase tracking-[0.3em] text-sm font-bold mb-6">
              FOR QATAR. BY QATAR.
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
              Building Qatar's Digital Commercial Vehicle Network
            </h1>

            <p className="mt-8 text-gray-700 text-lg leading-8 max-w-xl">
              TruckBookers is a Qatar-based logistics technology platform
              simplifying commercial vehicle booking, fleet aggregation,
              real-time tracking, and digital logistics operations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {[
                {
                  icon: Truck,
                  text: "Commercial Vehicle Booking",
                },
                {
                  icon: MapPin,
                  text: "Real-Time Tracking",
                },
                {
                  icon: ShieldCheck,
                  text: "Verified Fleet Network",
                },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border shadow-sm hover:border-[#F5D000] transition"
                >
                  <Icon size={18} className="text-[#F5D000]" />
                  <span className="font-medium text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            <img
              src="/about-hero.jpg"
              alt="TruckBookers"
              className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
            />

            <div className="absolute bottom-6 left-6 right-6 bg-black text-white p-5 rounded-2xl">
              <p className="text-[#F5D000] text-sm font-bold">TRUCKBOOKERS</p>

              <h3 className="text-xl font-bold mt-2">
                Driving Qatar's Logistics Transformation
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#F5D000] font-bold mb-3">
              For Qatar. By Qatar.
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-black">
              A Smarter Way to Move Commercial Vehicles
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              TruckBookers connects businesses, contractors, fleet operators,
              and drivers through a unified digital marketplace. Our platform is
              designed to improve transparency, increase fleet utilization, and
              support Qatar’s growing logistics ecosystem.
            </p>
          </div>

          <div className="bg-black text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold text-[#F5D000]">Our Mission</h3>

            <p className="mt-4 text-gray-300 leading-8">
              To digitize Qatar’s commercial trucking sector by making vehicle
              booking faster, smarter, more reliable, and more transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl border shadow-sm">
            <h3 className="text-2xl font-bold text-black">Our Vision</h3>
            <p className="mt-4 text-gray-600 leading-8">
              To become Qatar’s leading digital marketplace for commercial
              vehicle booking and fleet management.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border shadow-sm">
            <h3 className="text-2xl font-bold text-black">Our Purpose</h3>
            <p className="mt-4 text-gray-600 leading-8">
              To create a structured, technology-enabled logistics ecosystem
              that empowers businesses, fleet owners, and drivers across Qatar.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-[#F5D000] font-bold text-center mb-3">
            Our Values
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {["Innovation", "Reliability", "Transparency", "Compliance"].map(
              (item) => (
                <div
                  key={item}
                  className="bg-white p-6 rounded-2xl shadow-sm border hover:border-[#F5D000] transition"
                >
                  <h3 className="text-xl font-bold text-black">{item}</h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    Creating a smarter and more trusted logistics ecosystem for
                    Qatar.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
