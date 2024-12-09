
import Navbar from "../components/Navbar";
import A1 from "../assets/img/Hero3.jpeg";
import { useState } from "react";
import Footer from "../components/Footer";
import { enquiryCollection } from "../api/firebase";
import { addDoc } from "firebase/firestore";

export default function EnquiryPage() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      country === "" ||
      date === "" ||
      duration === "" ||
      msg === ""

    ) {
      alert("Please fill all the fields");
      return;
    }

    try {
      const docRef = await addDoc(enquiryCollection, {
        name: name,
        email: email,
        phone: phone,
        country: country,
        date: date,
        duration: duration,
        msg: msg,
      });
      if (docRef.id) {
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setDate("");
        setDuration("");
        setShowModal(true);
      }
    } catch (e) {
      alert("Error adding document: ", e);
      console.error("Error adding document: ", e);
    }
  };

  const handleOkayClick = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Navbar />
      <div className="MobileView flex flex-col md:flex-row justify-center mt-[10%]">
        <img
          className="w-[90%] md:w-[50%] rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl mx-auto md:mx-0"
          src={A1}
          alt=""
        />

        <div className="bg-[#F88820] w-[90%] md:w-[30%] rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl flex flex-col justify-center mx-auto md:mx-0 py-4">
          <h1 className="text-center text-[5vw] md:text-[3vw] font-regular md:mb-6 font-serif">
            Tour Enquiry
          </h1>
          <h1 className="font-regular text-[2.5vw] md:text-[1.5vw] text-center">
            Home | Tour Enquiry
          </h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto bg-[#F88820] p-6 rounded-xl mt-[5%] md:rounded-3xl shadow-md text-black mb-8">
        <h1 className="text-center text-[5vw] md:text-[3vw] font-bold mb-6 font-serif">
          Enquiry Form
        </h1>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          id="enquiryForm"
          className="grid md:grid-cols-2 gap-[4vw] px-[2vw] mx-auto"
        >
          <div>
            <label
              htmlFor="name"
              className="block md:text-[1.5vw] font-medium mb-1"
            >
              👤 Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name Here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-800 py-2 text-black placeholder:text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block md:text-[1.5vw] font-medium mb-1"
            >
              ✉️ Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-800 py-2 text-black placeholder:text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block md:text-[1.5vw] font-medium mb-1"
            >
              📞 Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+XX ISD CODE"
              className="w-full border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-800 py-2 text-black placeholder:text-black"
              pattern="\+[0-9]{1,4} [0-9]{5,15}"
              required
            />
            <small className="text-sm text-gray-700">
              Format: +XX ISD CODE PHONE
            </small>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block md:text-[1.5vw] font-medium mb-1"
            >
              🌍 Country of Residence:
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Enter your Country"
              className="w-full border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-800 py-2 text-black placeholder:text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block md:text-[1.5vw] font-medium mb-1"
            >
              📅 Date of Arrival:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-800 py-2 text-black"
              required
            />
          </div>

          <div>
            <label
              htmlFor="duration"
              className="block md:text-[1.5vw] font-medium mb-1"
            >
              ⏰ Duration (In Days):
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="Please enter in numbers"
              className="w-full border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-800 py-2 text-black placeholder:text-black"
              required
              min="1"
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block md:text-[1.5vw] font-medium mb-1"
            >
              Your Specific Requirment:
            </label>
            <textarea
            
              id="msg"
              name="msg"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Enter your Specific Requirement"
              className="w-full border-b-2 border-black bg-transparent focus:outline-none focus:border-blue-800 py-2 text-black placeholder:text-black"
              required
            />
          </div>

          <div className="md:col-span-2 mx-auto">
            <button
              type="submit"
              className="bg-white text-lg text-black font-bold px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="text-center md:text-xl text-lg mt-4">
          *After filling this form we will contact you within the next 6 hours.
        </p>
      </div>

      {/* Success Message Modal */}
      {showModal && (
        <div
          id="successModal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-[#F49330] text-center p-6 rounded-lg shadow-lg w-[80%] md:w-[40%]">
            <p className="text-white text-lg font-bold">
              Thanks For submitting the form, We will contact you very soon.
              <br />
              !!JAI SHREE RAM!!
            </p>
            <button
              id="okayButton"
              className="mt-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition duration-500"
              onClick={handleOkayClick}
            >
              Okay
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
