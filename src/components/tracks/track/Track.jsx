import { FaPlay } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export const Track = () => {
  return (
    <div className="flex flex-row justify-between mb-3">
      <div className="flex flex-row">
        <img
          src="images/meanii.jpg"
          alt=""
          className="w-14 h-14 rounded-lg self-center mr-2"
        />
        <div className="flex flex-col">
          <div className="text-base">Jan Brown</div>
          <div className="text-xs text-gray-500">The space In between</div>
        </div>
      </div>
      <div className="flex flex-row self-center mr-1 gap-3">
        <button className="btn btn-md ml-1 btn-circle">
          <FaPlay />
        </button>
        <span className="self-center">
          <FaRegHeart />
        </span>
      </div>
    </div>
  );
};
