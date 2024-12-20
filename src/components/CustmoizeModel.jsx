

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "25%",
//   width: "30%",
  bgcolor: "#F88820",
  boxShadow: 24,

  p: 4,
  borderRadius: "20px",
};

export default function CustmoizeModel({open,handleOpen,handleClose}) {
    const navigate = useNavigate();


  
  return (
    <div>
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
          <Box sx={style} className="w-[80%] md:w-[30%]">

          <div className="absolute top-2 right-2">
                <CancelIcon
                    onClick={handleClose}
                    className="cursor-pointer"
                />
            </div>
            <p className="text-center text-base md:text-2xl  mb-6 font-semibold font-serif">
            Want to Customize Your tour
            According to you?
            </p>

            <div className="flex justify-center">
                <button
                    className="bg-white font-bold shadow-xl text-black px-4 py-2 rounded-xl mr-4"
                    onClick={
                        () => {
                            handleClose();
                            navigate("/enquiry");
                        }

                    }
                >
                    Talk to our Experts →
                </button>
            </div>

            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
