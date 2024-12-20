import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (<>
  <Navbar />
    <div className=" text-gray-800">
      {/* Container */}
      <div className="max-w-7xl mx-auto p-5 sm:p-10 lg:p-16">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          This Privacy Policy explains how <b>www.prayagrajkumbhmela.com</b> collects, uses, and protects your information.
        </p>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              1. Information We Collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <b>Personal Information:</b> Name, email, phone number, etc., when you contact us or submit inquiries.
              </li>
              <li>
                <b>Usage Data:</b> Information about how you use our website (e.g., pages visited, time spent).
              </li>
              <li>
                <b>Cookies:</b> We use cookies to enhance user experience and analyze traffic.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700">
              We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To respond to your inquiries and provide customer support.</li>
              <li>To improve and optimize our website for a better user experience.</li>
              <li>To send you updates, newsletters, and promotional content.</li>
              <li>To comply with legal obligations or resolve disputes.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-700">
              We do not sell, trade, or rent your personal information. However, we may share your information in the following cases:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>With service providers to operate our website (e.g., hosting partners).</li>
              <li>To comply with legal obligations, court orders, or government requests.</li>
              <li>In case of business transfers, mergers, or acquisitions.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              4. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700">
              We use cookies to track user activity and enhance user experience. You can manage or disable cookies through your browser settings.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              5. Data Security
            </h2>
            <p className="text-gray-700">
              We implement industry-standard security measures to protect your personal data. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              6. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Access, update, or delete your personal data by contacting us.</li>
              <li>Opt-out of receiving promotional content at any time.</li>
              <li>Disable cookies through your browser settings.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700">
              We reserve the right to update this Privacy Policy. Changes will be posted on this page with an updated effective date.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns regarding this Privacy Policy, please contact us:
            </p>
            <ul className="pl-6 text-gray-700">
              <li>Email: <b>kumbhexperienceindia@gmail.com</b></li>
              <li>Phone: <b>+918932951318</b></li>
            </ul>
          </section>
        </div>
      </div>
    </div>

    <Footer />
    </>
  );
};

export default PrivacyPolicy;
