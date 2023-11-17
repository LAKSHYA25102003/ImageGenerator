import React, { useEffect } from "react";
import { useContext } from "react";
import ImageContext from "../../Context/ImageContext";

function UserComicStrip() {
  const { ImageStore } = useContext(ImageContext);
 
  useEffect(() => {}, [ImageStore.length]);
  if (ImageStore.length === 0) return;
  return (
    <div className="py-6 text-white flex justify-center items-center">
      <div className="w-[80%] flex flex-col gap-6 justify-center items-center">
        <h1 className="text-center font-bold text-2xl">Your Comic Strip</h1>
        <div className="grid grid-cols-3 gap-10">
          {ImageStore.map((Image, idx) => {
            return (
              <div>
                <img
                  className="rounded-md hover:opacity-70 hover:scale-[1.05] transition delay-150 duration-300"
                  src={Image}
                  alt={`Image${idx}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserComicStrip;
