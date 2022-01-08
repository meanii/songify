import { FaPlay } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { AiFillSound } from "react-icons/ai";

export const Player = () => {
  return (
    <div className="flex justify-center static text-white">
      <div className="flex flex-row w-full fixed bottom-0 h-28 bg-neutral-focus rounded-lg">
        <img src="images/meanii.jpg" alt="" className="rounded-md m-2" />
        <dev className="flex flex-col self-center">
          <div className="text-lg">Header</div>
          <div className="text-sm">Conan</div>
        </dev>
        <div className="flex-row flex-none hidden lg:flex">
          <button className="btn btn-md ml-3 btn self-center bg-transparent border-0">
            <GiPreviousButton />
          </button>
          <button className="btn btn-md ml-3 btn-circle self-center">
            <FaPlay />
          </button>
          <button className="btn btn-md ml-3 btn self-center bg-transparent border-0">
            <GiNextButton />
          </button>
        </div>
        <input
          type="range"
          max="100"
          value="40"
          className="flex-0 range self-center ml-3 mr-3 w-5/6"
        />
        <div className="flex-none hidden lg:flex flex-row self-center ml-3 mr-3 gap-2">
          <AiFillSound />
          <input type="range" max="100" value="40" className="flex-0 range" />
        </div>
      </div>
    </div>
  );
};
