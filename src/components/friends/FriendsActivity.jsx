import { BsGridFill } from "react-icons/bs";
import { Friend } from "./friend/Friend";

export const FriendsActivity = () => {
  return (
    <div>
      <div className="card bg-[#212121] mt-16 mr-3 w-72 text-white">
        <div className="flex flex-row card-title m-5 w-fit">
          <div className="text-xl mr-7">Friends Activity</div>
          <div>
            <BsGridFill />
          </div>
        </div>

        <div className="card-body h-70">
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
          <Friend />
        </div>

        <div className="self-center mb-4">
            <button className="btn btn-wide"> View All</button>
        </div>
      </div>
    </div>
  );
};
