import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import emailjs from "@emailjs/browser";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 2,
  py: 1,
  borderRadius: 4,
};

export default function EmailPopUp() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 5000);
  }, []);

  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_h11v92z",
        "template_f9xv7yb",
        {
          from_name: "TryFit",
          to_name: "Akash Gandhar",
          from_email: "tryfit@gmail.com",
          to_email: email,
          message: "message",
        },
        "Kz8FjSu5FV6uEPhxp"
      )
      .then((result) => {
        console.log(result);
        setOpen(false);
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="max-h-full overflow-y-auto">
          {/* x button  */}
          <div className="w-full flex items-center justify-end">
            <button className="w-2 font-bold" onClick={handleClose}>
              X
            </button>
          </div>

          <div className="flex flex-row gap-2 w-full items-center justify-center px-2 py-4">
            {/* an image  */}
            <div className="w-full">
              <img src="/images/email.png" alt="email" />
            </div>

            {/* text  */}
            <div className="w-full">
              <p className="text-xl font-bold">
                Find Your Perfect Fabric with Our FREE Swatch Guide
              </p>
              <p className="text-sm mt-2 font-semibold text-gray-500">
                See and feel our fabrics before you commit. Download your
                catalogue today!
              </p>
              <div className="w-full flex flex-col  gap-2 items-center justify-center mt-4">
                {/* adding shadows and rounmded input  */}
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter your email"
                  className="w-3/4 p-2 rounded-full shadow-md border-t  border-gray-100"
                />
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 font-semibold w-3/4 text-white p-2 rounded-full"
                >
                  Get your catalogue
                </button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
