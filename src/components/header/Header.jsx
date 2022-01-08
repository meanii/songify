import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";

export default function Header() {
  return (
    <div className="navbar m-5 bg-[#1a1a1a] text-white rounded-box">
      <div className="flex-none hidden lg:flex">
        <button className="btn btn-square btn-ghost">
          <GiHamburgerMenu />
        </button>
      </div>
      <div className="flex-1 hidden px-2 mx-2 lg:flex">
        <span className="text-lg font-bold">songify</span>
      </div>
      <div className="flex-1 lg:flex-none">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-ghost"
          />
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <ImSearch />
        </button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end avatar">
          <div className="rounded-full w-10 h-10 m-1">
            <img tabindex="0" src="images/meanii.jpg" alt=""/>
          </div>
          <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li> 
          <li>
            <a>Item 2</a>
          </li> 
          <li>
            <a>Item 3</a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
