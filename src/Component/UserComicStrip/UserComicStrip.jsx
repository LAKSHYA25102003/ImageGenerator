import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import ImageContext from "../../Context/ImageContext";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function UserComicStrip() {
  const { ImageStore, downloadImage,copyImageToClipboard} = useContext(ImageContext);
  const [showButtons, setShowButtons] = useState(false);
  useEffect(() => {}, [ImageStore.length]);
  if (ImageStore.length === 0) return;
  return (
    <div className="py-6 text-white flex justify-center items-center">
      <div className="w-[80%] max-[600px]:w-[100%] flex flex-col gap-10 justify-center px-6 items-center">
        <h1 className="text-center font-bold max-[700px]:text-[20px] text-2xl">
          Your Comic Strip
        </h1>
        <div className="grid max-[1000px]:grid-cols-1 max-[1488px]:grid-cols-2 grid-cols-3 gap-10">
          {ImageStore.map((Image, idx) => {
            return (
              <div
                onMouseEnter={() => setShowButtons(true)}
                onMouseLeave={() => setShowButtons(false)}
                className="relative"
                key={idx}
              >
                <img
                  className="rounded-md hover:opacity-70 hover:scale-[1.05] transition delay-50 duration-300"
                  src={Image}
                  alt={`image${idx + 1}`}
                />
                {showButtons && (
                  <div className="absolute bottom-[1px]  justify-between items-center w-full px-2  flex">
                    <div  onClick={()=>{copyImageToClipboard(Image)}}  className="cursor-pointer hover:scale-[1.2] transition delay-50 duration-300">
                      <ContentCopyIcon/>
                    </div>
                    <div
                      onClick={() => {
                        downloadImage(Image, idx);
                      }}
                      className=" p-1 cursor-pointer hover:scale-[1.2] transition delay-50 duration-300"
                    >
                      <DownloadForOfflineIcon fontSize="large" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserComicStrip;
