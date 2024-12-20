import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const RefundPolicy = () => {
  return (<>
    <Navbar/>
    <div className=" text-gray-800">
      {/* Container */}
      <div className="max-w-7xl mx-auto p-5 sm:p-10 lg:p-16">
        {/* Header Section */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">
          Refund Policy
        </h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          At <b>www.prayagrajkumbhmela.com</b>, we value your satisfaction. Please read our refund policy carefully to understand your rights and our obligations.
        </p>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              1. Eligibility for Refunds
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Refunds are available for cancellations made at least <b>15 days</b> prior to the event start date.
              </li>
              <li>
                Refund requests must be submitted via our official channels (email or contact form) with proof of booking.
              </li>
              <li>
                In case of unforeseen circumstances (natural disasters, government restrictions), refunds may be processed on a case-by-case basis.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              2. Non-Refundable Items
            </h2>
            <p className="text-gray-700">
              Certain fees and expenses are non-refundable:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Processing fees and taxes.</li>
              <li>Booking charges for hotels and transportation already confirmed.</li>
              <li>Customized packages or special arrangements.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              3. Refund Process
            </h2>
            <p className="text-gray-700">
              Once a refund request is approved, the process will be as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Refunds will be processed within <b>7-10 business days</b>.
              </li>
              <li>
                Refunds will be issued to the original payment method.
              </li>
              <li>
                You will receive a confirmation email once the refund is processed.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              4. Changes or Cancellations by Us
            </h2>
            <p className="text-gray-700">
              In rare circumstances where we need to cancel or modify your booking:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>You will be notified immediately.</li>
              <li>
                We will offer an alternative package or a full refund.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              5. Contact Us
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns about our refund policy, please reach out to us:
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

export default RefundPolicy;
