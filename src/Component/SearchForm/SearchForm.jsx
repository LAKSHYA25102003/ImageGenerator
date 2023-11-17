import React from "react";
import { useContext } from "react";
import ImageContext from "../../Context/ImageContext";

function SearchForm() {
  const {handleClickOpen} = useContext(ImageContext);
  return (
    <div className="py-6 text-white flex justify-center items-center">
      <div className="w-[82%] h-14 p-2">
        <div className=" rounded-md w-full  flex justify-center items-center ">
          {/* <div className="px-3  border-r-[.5px] border-r-slate-400">
            <SearchIcon />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <input
              type="text"
              className="outline-none w-full  rounded-md  bg-slate-500 px-3"
            />
          </div> */}
          <div onClick={handleClickOpen} className="rounded-sm bg-cyan-500 px-3 cursor-pointer  font-bold text-lg hover:scale-[1.02] ease-in-out">
            <button  className="h-[49px]">Generate Comic Strip</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
