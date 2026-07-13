function Contact() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#FFFBE6] py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="text-[#F5D000] font-bold mb-4">
            Contact Us
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Let's Move Qatar Forward
          </h1>

          <p className="mt-6 text-gray-700 max-w-3xl text-lg">
            Contact Truckbookers for truck bookings, fleet partnerships,
            enterprise enquiries, and business collaboration.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div>
            <p className="text-[#F5D000] font-bold mb-3">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-4xl font-bold">
              We'd Love To Hear From You
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Whether you're looking for commercial vehicle bookings,
              fleet partnerships, or enterprise logistics solutions,
              our team is here to help.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="font-semibold text-black">Email</p>
                <p className="text-gray-600">
                  info@truckbookers.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-black">Phone</p>
                <p className="text-gray-600">
                  +974 30501657
                </p>
              </div>

              <div>
                <p className="font-semibold text-black">Location</p>
                <p className="text-gray-600">
                  Doha, Qatar
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#FAFAFA] p-8 rounded-3xl border">
            <h3 className="text-2xl font-bold mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-4">
              <input
                className="w-full p-4 rounded-xl border outline-none focus:border-[#F5D000]"
                placeholder="Your Name"
              />

              <input
                className="w-full p-4 rounded-xl border outline-none focus:border-[#F5D000]"
                placeholder="Company Name"
              />

              <input
                className="w-full p-4 rounded-xl border outline-none focus:border-[#F5D000]"
                placeholder="Email Address"
              />

              <input
                className="w-full p-4 rounded-xl border outline-none focus:border-[#F5D000]"
                placeholder="Phone Number"
              />

              <textarea
                className="w-full p-4 rounded-xl border h-32 outline-none focus:border-[#F5D000]"
                placeholder="Message"
              ></textarea>

              <button
                type="button"
                className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Contact;