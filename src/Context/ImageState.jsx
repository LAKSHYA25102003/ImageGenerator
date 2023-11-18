import ImageContext from "./ImageContext";
import toast from "react-hot-toast";
import React, { useState } from "react";

function ImageState(props) {
  const [fetchingImage, setFetchingImage] = useState(false);
  // Image store
  const [ImageStore, setImageStore] = useState([]);

  const addImage = (url) => {
    const updatedImageStore = [...ImageStore, url];
    setImageStore(updatedImageStore);
  };

  //  for opening the comic panel form
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    if (ImageStore.length >= 10) {
      toast.error("Maximum of 10 comic panels allowed");
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
    try {
      const toastId = toast.loading("Waiting...");
      setFetchingImage(true);
      const data = {
        inputs: text,
      };
      setText("");
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
      const url = URL.createObjectURL(result);
      if (response.ok) {
        toast.dismiss(toastId);
        toast.success("Successfully got the image");
        addImage(url);
      } else {
        toast.dismiss(toastId);
        toast.error("Error while fetching, try to generate again");
      }
      setFetchingImage(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      toast.error("Error while fetching, try to generate again");
    }
  };

  const SubmitForm = () => {
    handleClose();
    if (text.trim() === "") {
      toast.error("Enter input text");
      return;
    }
    if (ImageStore.length >= 10) {
      toast.error("Maximum of 10 comic panels allowed");
      return;
    }
    fetchImage();
  };

  const downloadImage = (url, idx) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `comic_panel${idx + 1}.jpg`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyImageToClipboard = (blobUrl) => {
    
    fetch(blobUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const clipboardItem = new ClipboardItem({ 'image/png': blob });

        navigator.clipboard.write([clipboardItem])
          .then(() => {
            toast.success("Image copied successfully")
          })
          .catch((error) => {
            console.error('Error copying image:', error);
            toast.error("Error copying image")
          });
      })
      .catch((error) => {
        console.error('Error fetching blob data:', error);
      });
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
        fetchingImage,
        downloadImage,
        copyImageToClipboard
      }}
    >
      {props.children}
    </ImageContext.Provider>
  );
}

export default ImageState;
