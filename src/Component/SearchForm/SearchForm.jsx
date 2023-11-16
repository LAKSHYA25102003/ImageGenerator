import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchForm() {
  return (
    <div className="py-6 text-white flex justify-center items-center">
      <div className="w-[82%] h-14 p-2">
        <div className="bg-slat-500 rounded-md w-full  flex justify-center items-center bg-slate-500">
          <div className="px-3  border-r-[.5px] border-r-slate-400">
            <SearchIcon />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <input
              type="text"
              className="outline-none w-full  rounded-md  bg-slate-500 px-3"
            />
          </div>
          <div className="rounded-sm bg-cyan-500 px-3  font-bold text-lg hover:scale-[1.02] ease-in-out">
            <button className="h-[49px]">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
