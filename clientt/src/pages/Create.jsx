import React from "react";
import dogPng from "../assets/dog.png";
import "../pages/create.css";
function Create() {
  return (
    <div className=" flex  justify-center  ">
      <img src={dogPng} alt="" className=" h-96 mr-48 mt-40" />
      <div>
        <div
          className=" text-4xl font-bold text-white ml-32 mt-60"
          id="nft-title"
        >
          Create your NFTs
        </div>
        <button
          class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
          type="button"
        >
          Add to bag
        </button>
      </div>
    </div>
  );
}

export default Create;
