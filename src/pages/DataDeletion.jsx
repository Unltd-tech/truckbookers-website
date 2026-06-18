function DataDeletion() {
return ( <main className="pt-24">
{/* Hero Section */} <section className="bg-[#FFFBE6] py-24"> <div className="max-w-[1400px] mx-auto px-6"> <p className="text-[#F5D000] font-bold mb-4">
Data Deletion </p>

      <h1 className="text-4xl md:text-6xl font-bold text-black">
        User Data Deletion Instructions
      </h1>

      <p className="mt-6 text-gray-700 max-w-3xl text-lg">
        At TruckBookers, we respect your privacy and provide users with the
        ability to delete their account and personal data directly from the
        application.
      </p>
    </div>
  </section>

  {/* Content Section */}
  <section className="py-20 bg-white">
    <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12">

      {/* Left Info */}
      <div>
        <p className="text-[#F5D000] font-bold mb-3">
          Account Deletion
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          How to Delete Your Account
        </h2>

        <p className="mt-5 text-gray-600 leading-8">
          You can delete your TruckBookers account directly from the app by
          following the steps below.
        </p>

        <div className="mt-10 bg-[#FAFAFA] p-8 rounded-3xl border">
          <ol className="list-decimal pl-6 space-y-4 text-gray-700">
            <li>Open the TruckBookers application.</li>
            <li>Log in to your account.</li>
            <li>Navigate to Profile.</li>
            <li>Select Profile Edit.</li>
            <li>Tap the top-right 3 dots and select Delete Account.</li>
            <li>Confirm your deletion request.</li>
          </ol>
        </div>
      </div>

      {/* Right Card */}
      <div className="bg-[#FAFAFA] p-8 rounded-3xl border">
        <h3 className="text-2xl font-bold mb-6">
          What Happens After Deletion?
        </h3>

        <ul className="list-disc pl-6 space-y-4 text-gray-700 leading-7">
          <li>Your profile information will be removed.</li>
          <li>Your login credentials will be deleted.</li>
          <li>
            Personal information associated with your account will be
            permanently removed from our systems.
          </li>
          <li>
            Certain records may be retained where required by law,
            regulatory requirements, fraud prevention, dispute resolution,
            or other legitimate business purposes.
          </li>
        </ul>
      </div>

    </div>
  </section>

  {/* Unable to Access Section */}
  <section className="py-20 bg-[#FAFAFA]">
    <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12">

      <div>
        <p className="text-[#F5D000] font-bold mb-3">
          Need Help?
        </p>

        <h2 className="text-3xl md:text-4xl font-bold">
          Unable to Access the App?
        </h2>

        <p className="mt-5 text-gray-600 leading-8">
          If you cannot access your account or are unable to use the
          application, you may request account deletion by contacting us.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <h3 className="text-2xl font-bold mb-6">
          Request Deletion by Email
        </h3>

        <p className="text-gray-600 leading-7 mb-6">
          Please include your registered email address, your name, and your
          request for account deletion.
        </p>

        <div className="space-y-5 text-gray-700">
          <p>
            <strong>Email:</strong> info@truckbookers.com
          </p>

          <p>
            <strong>Contact Page:</strong> truckbookers.com/contact-us
          </p>

          <p>
            <strong>Website:</strong> truckbookers.com
          </p>
        </div>
      </div>

    </div>
  </section>
</main>

);
}

export default DataDeletion;
