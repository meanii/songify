import { FaPlay } from "react-icons/fa";

export const Album = ({ image }) => {
  return (
    <div className="rounded-box bg-neutral-focus">
      <img
        src={image}
        alt=""
        className="m-2 rounded-xl object-none h-60 w-80"
      />
      <div className="flex flex-row">
        <button className="btn btn-lg btn-circle m-3">
          <FaPlay />
        </button>
        <div className="flex flex-col self-center">
          <div className="text-lg font-bold">Sad bops</div>
          <div className="text-sm text-gray-500">For all of us dacing on our own.</div>
        </div>
      </div>
    </div>
  );
};  
