import ImageContext from "./ImageContext";
import toast from "react-hot-toast";
import React, { useState } from "react";

function ImageState(props) {
  // Image store
  let ImageStore = [];

  //  for opening the comic panel form
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    if (ImageStore.length >= 10) {
      return;
    }
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // form for text input
  const [text, setText] = useState("");
  const fetchImage = async () => {
    const toastId=toast.loading("Waiting...");
    console.log("clicked");
    const data = {
      inputs: text,
    };
    let response = await fetch(
      "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
      {
        headers: {
          Accept: "image/png",
          Authorization:
            "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.blob();
    
    console.log(response);
    const url = URL.createObjectURL(result);
    ImageStore.push(url);
    if(response.ok)
    {
      toast.dismiss(toastId);
      toast.success("Successfully got the image");
    }
    else
    {
      toast.dismiss(toastId);
      toast.error("Error while fetching");
    }
  };

  const SubmitForm = () => {
    handleClose();
    setText("");
    if (ImageStore.length >= 10) {
      return;
    }

    fetchImage();
  };

  return (
    <ImageContext.Provider
      value={{
        open,
        handleClickOpen,
        handleClose,
        text,
        setText,
        SubmitForm,
        ImageStore,
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
}

export default ImageState;
