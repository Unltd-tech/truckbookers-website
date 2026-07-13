function PrivacyPolicy() {
  return (
    <main className="pt-24">
      {/* Hero Section */}{" "}
      <section className="bg-[#FFFBE6] py-24">
        {" "}
        <div className="max-w-[1400px] mx-auto px-6">
          {" "}
          <p className="text-[#F5D000] font-bold mb-4">Privacy Policy </p>
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Truckbookers Privacy Policy
          </h1>
          <p className="mt-6 text-gray-700 max-w-3xl text-lg">
            This Privacy Policy describes how Truckbookers collects, uses,
            stores, and protects information provided by users of the platform.
          </p>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="bg-[#FAFAFA] p-8 md:p-10 rounded-3xl border space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Information We Collect
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
                <li>Name, email address, and phone number.</li>
                <li>Device and application information.</li>
                <li>Vehicle details including registration information.</li>
                <li>Billing and payment information.</li>
                <li>Trip and booking information.</li>
                <li>GPS and location information when applicable.</li>
                <li>
                  Ratings, reviews, profile images, and communication logs.
                </li>
                <li>Driver and carrier verification information.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                How We Use Your Information
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
                <li>To provide and improve platform services.</li>
                <li>To facilitate bookings and logistics operations.</li>
                <li>To process payments and billing.</li>
                <li>To verify drivers, carriers, and users.</li>
                <li>To enhance safety, compliance, and fraud prevention.</li>
                <li>To communicate important service updates.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>

              <p className="text-gray-700 leading-7">
                Truckbookers may share information with customers, carriers,
                drivers, payment providers, regulatory authorities, and other
                service providers where necessary to deliver services, comply
                with legal obligations, or protect platform users.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Location Information</h2>

              <p className="text-gray-700 leading-7">
                GPS and location information may be collected from drivers and
                carriers while actively using the platform to facilitate
                dispatching, tracking, route visibility, and service delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>

              <p className="text-gray-700 leading-7">
                Truckbookers takes reasonable technical and organizational
                measures to protect user information from unauthorized access,
                disclosure, misuse, alteration, or destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>

              <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-7">
                <li>Provide accurate and up-to-date information.</li>
                <li>Maintain account confidentiality.</li>
                <li>Protect login credentials and account access.</li>
                <li>Comply with applicable laws and regulations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>

              <p className="text-gray-700 leading-7">
                Certain records may be retained where required by law,
                regulatory requirements, fraud prevention, dispute resolution,
                auditing obligations, or other legitimate business purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Account Deletion</h2>

              <p className="text-gray-700 leading-7">
                Users may request account deletion through the application or by
                contacting Truckbookers support. For detailed instructions,
                please refer to the Data Deletion page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Email:</strong> info@truckbookers.com
                </p>

                <p>
                  <strong>Website:</strong> truckbookers.com
                </p>

                <p>
                  <strong>Location:</strong> Doha, Qatar
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
