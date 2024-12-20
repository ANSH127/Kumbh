import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const TermsAndConditions = () => {
  return (<>
  <Navbar/>
    <div className=" text-gray-800">
      {/* Container */}
      <div className="max-w-7xl mx-auto p-5 sm:p-10 lg:p-16">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">
          Terms and Conditions
        </h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          Welcome to <b>prayagrajkumbhmela.com</b>. Please read these terms and conditions carefully before using our services.
        </p>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing or using our website, you agree to comply with and be bound by these terms and conditions. If you do not agree, please refrain from using our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              2. Booking and Payment
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All bookings are subject to availability.</li>
              <li>Full payment is required to confirm your booking.</li>
              <li>Any additional charges (e.g., taxes, processing fees) will be clearly mentioned during booking.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              3. Cancellation and Refunds
            </h2>
            <p className="text-gray-700">
              Refunds are subject to our <b>Refund Policy</b>. Key points include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Cancellations made at least <b>15 days</b> prior to the event are eligible for partial refunds.</li>
              <li>Processing fees, taxes, and non-refundable bookings are excluded from refunds.</li>
              <li>Refunds are processed within <b>7-10 business days</b> after approval.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              4. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Ensure that the information you provide is accurate and up-to-date.</li>
              <li>Respect the local culture and follow guidelines during the Kumbh Mela tour.</li>
              <li>Use our website and services for lawful purposes only.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-700">
              We are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Delays or cancellations due to unforeseen circumstances (e.g., weather, government restrictions).</li>
              <li>Loss or damage to personal belongings during the tour.</li>
              <li>Third-party service failures (e.g., hotels, transport providers).</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              6. Intellectual Property
            </h2>
            <p className="text-gray-700">
              All content, logos, and materials on this website are the property of <b>prayagrajkumbhmela.com</b>. Unauthorized use or duplication is strictly prohibited.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              7. Dispute Resolution
            </h2>
            <p className="text-gray-700">
              Any disputes arising out of these terms will be governed by the laws of India and resolved through arbitration in Prayagraj.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              8. Changes to Terms
            </h2>
            <p className="text-gray-700">
              We reserve the right to update these terms at any time. Changes will be posted on this page with an updated effective date.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              9. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions about these terms, please contact us:
            </p>
            <ul className="pl-6 text-gray-700">
              <li>Email: <b>kumbhexperienceindia@gmail.com</b></li>
              <li>Phone: <b>+91 8932951318</b></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default TermsAndConditions;
