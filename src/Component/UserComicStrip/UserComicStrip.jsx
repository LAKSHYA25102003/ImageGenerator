import React, { useEffect } from "react";
import { useContext } from "react";
import ImageContext from "../../Context/ImageContext";

function UserComicStrip() {
  const { ImageStore } = useContext(ImageContext);
  useEffect(() => {
    console.log(ImageStore);
  }, [ImageStore.length]);
  if (ImageStore.length === 0) return;
  return (
    <div className="py-6 text-white flex justify-center items-center">
      <div className="w-[80%] flex flex-col gap-10 justify-center items-center">
        <h1 className="text-center font-bold text-2xl">Your Comic Strip</h1>
        <div >
           <img src="bob:http://localhost:3000/a3e7b667-a60a-460f-aa5e-a806504e2724" alt="" />
        </div>
        <div className="grid grid-cols-3">
          {ImageStore.map((Image, idx) => {
            return (
              <div>
                <img src={Image} alt={`Image${idx}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default UserComicStrip;
