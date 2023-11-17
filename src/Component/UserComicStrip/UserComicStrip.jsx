import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import ImageContext from "../../Context/ImageContext";
import ai1 from "../../Images/ai1.jpg";

function UserComicStrip() {
  const { ImageStore } = useContext(ImageContext);

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
              <div key={idx}>
                <img
                  className="rounded-md hover:opacity-70 hover:scale-[1.05] transition delay-150 duration-300"
                  src={ai1}
                  alt={`image${idx}`}
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
