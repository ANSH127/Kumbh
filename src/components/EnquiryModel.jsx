import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "90%",
  // width: "80%",
  bgcolor: "#F88820",
  boxShadow: 24,

  p: 4,
  borderRadius: "20px",
};

export default function EnquiryModel({open,handleOpen,handleClose}) {
// //   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {};
  const handleOkayClick = () => {
    setShowModal(false);
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="w-full md:w-[80%]">
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
              *After filling this form we will contact you within the next 6
              hours.
            </p>

            {showModal && (
              <div
                id="successModal"
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <div className="bg-[#F49330] text-center p-6 rounded-lg shadow-lg w-[80%] md:w-[40%]">
                  <p className="text-white text-lg font-bold">
                    Thanks For submitting the form, We will contact you very
                    soon.
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
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
