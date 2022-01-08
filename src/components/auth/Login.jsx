import { BsSpotify } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="mb-5 text-5xl font-bold">Songify 🌈</h1>
          <p className="mb-5">
            A music platform where we can get vibes in sync and add users into a
            room for realtime music experinces in long distance.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="button" value="Login" className="btn" />
            </div>
            <div className="divider">OR</div>
            <div className="flex flex-col self-center gap-2">
              <button className="btn btn-wide">
                <div className="text-2xl">
                  <FcGoogle />
                </div>
              </button>
              <button className="btn btn-wide">
                <div className="text-2xl text-green-600">
                  <BsSpotify />
                </div>
              </button>
            </div>

            <div className="text-sm self-center mt-5">
              <Link to="/signup" className="link link-hover">
                I don't have account!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
