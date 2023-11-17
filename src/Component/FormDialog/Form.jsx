import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { useContext } from "react";
import ImageContext from "../../Context/ImageContext";
import Box from "@mui/material/Box";

function Form() {
  const { open, handleClose, text, setText, SubmitForm, ImageStore } =
    useContext(ImageContext);
  return (
    <React.Fragment>
      <Dialog maxWidth={"lg"} open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="font-bold text-xl">
            Comic Panel Text Input{" "}
            <span
              style={{ fontStyle: "italic", color: "#666", fontSize: "14px" }}
              className=""
            >
              (Maximum of 10 comic panels allowed)
            </span>{" "}
          </div>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "800px",
            }}
          >
            <div className="">
              <div className="mb-6 ">
                <label
                  for="large-input"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Comic Panel {ImageStore.length + 1}
                </label>
                <textarea
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  rows={5}
                  type="text"
                  id="large-input"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="">
              <button
                onClick={SubmitForm}
                className="py-2 px-2 outline-none  text-lg hover:scale-[1.02] ease-in-out flex justify-center items-center  bg-cyan-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition  duration-200 text-center  font-bold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg max-w-md"
              >
                Submit
              </button>
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
export default Form;
