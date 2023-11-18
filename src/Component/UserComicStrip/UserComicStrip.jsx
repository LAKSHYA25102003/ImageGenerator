import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import ImageContext from "../../Context/ImageContext";
import DownloadIcon from "@mui/icons-material/Download";

function UserComicStrip() {
  const { ImageStore,downloadImage } = useContext(ImageContext);

  useEffect(() => {}, [ImageStore.length]);
  if (ImageStore.length === 0) return;
  return (
    <div className="py-6 text-white flex justify-center items-center">
      <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
        <h1 className="text-center font-bold max-[700px]:text-[20px] text-2xl">
          Your Comic Strip
        </h1>
        <div className="grid max-[1200px]:grid-cols-2 max-[450px]:grid-cols-1 grid-cols-3 gap-10">
          {ImageStore.map((Image, idx) => {
            return (
              <div className="relative" key={idx}>
                <img
                  className="rounded-md hover:opacity-70 hover:scale-[1.05] transition delay-150 duration-300"
                  src={Image}
                  alt={`image${idx+1}`}
                />
                <div onClick={()=>{downloadImage(Image,idx)}} className="absolute bottom-2 right-2  bg-white text-black rounded-[50%] p-1 cursor-pointer">
                  <DownloadIcon fontSize="small" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserComicStrip;
