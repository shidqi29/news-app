import { Link, NavLink } from "react-router-dom";
import {
  PiBookmarksSimpleBold,
  PiBookmarksSimpleFill,
  PiMagnifyingGlassBold,
  PiMoonBold,
  PiSunDimBold,
} from "react-icons/pi";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const Navbar = () => {
  const isActive = ({ isActive }) => {
    return isActive ? (
      <div className="rounded-full border border-base-content p-2">
        <PiBookmarksSimpleFill size={28} />
      </div>
    ) : (
      <div className="p-2">
        <PiBookmarksSimpleBold size={28} />
      </div>
    );
  };

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <header className="mb-2 w-full bg-base-300 py-2 shadow-sm shadow-current">
      <nav className="container navbar mx-auto">
        <div className="flex-1">
          <div className="text-3xl">
            <Link to="/">News App</Link>
          </div>
        </div>
        <div className="flex-none gap-5">
          <form>
            <div className="join">
              <input
                className="input join-item input-bordered rounded-full"
                placeholder="Search"
              />
              <button className="btn btn-neutral join-item rounded-r-full">
                <PiMagnifyingGlassBold size={28} />
              </button>
            </div>
          </form>
          <label className="swap swap-rotate">
            <input type="checkbox" />
            <div className="swap-on w-7 fill-current" data-set-theme="light">
              <PiMoonBold size={28} />
            </div>
            <div className="swap-off w-7 fill-current" data-set-theme="dark">
              <PiSunDimBold size={28} />
            </div>
          </label>
          <NavLink to="/saved">{isActive}</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
