import { NavLink } from "react-router-dom";
import {
  PiBookmarksSimpleBold,
  PiListBold,
  PiMagnifyingGlassBold,
  PiMoonBold,
  PiSunDimBold,
  PiXBold,
} from "react-icons/pi";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { navItem } from "../constant";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isActive = ({ isActive }) => {
    return isActive
      ? "tab-bordered tab tab-active px-0"
      : "tab tab-active px-0";
  };

  const toggle = () => {
    return setIsDrawerOpen((prev) => !prev);
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
      <div className="drawer">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
        />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <nav className="container navbar mx-auto">
            <div className="flex-none">
              <div className="text-xl">
                <NavLink to="/">News App</NavLink>
              </div>
            </div>
            <div className="flex-1">
              <div className="hidden w-full lg:flex">
                <div className="w-full">
                  <ul className="tabs justify-center">
                    <li className="flex gap-4">
                      {navItem.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.path}
                          className={isActive}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex-none gap-4">
              <div className="hidden sm:flex">
                <form>
                  <div className="join">
                    <input
                      className="input join-item input-bordered input-sm rounded-full lg:input-md focus:outline-none"
                      placeholder="Search news ..."
                    />
                    <button className="btn btn-neutral join-item btn-sm rounded-r-full lg:btn-md">
                      <PiMagnifyingGlassBold size={28} />
                    </button>
                  </div>
                </form>
              </div>
              <label className="swap swap-rotate">
                <input type="checkbox" />
                <div
                  className="swap-on w-7 fill-current"
                  data-set-theme="light"
                  title="Light Mode"
                >
                  <PiMoonBold size={28} />
                </div>
                <div
                  className="swap-off w-7 fill-current"
                  data-set-theme="dark"
                  title="Dark Mode"
                >
                  <PiSunDimBold size={28} />
                </div>
              </label>
              <div className="tooltip tooltip-bottom" data-tip="Saved News">
                <NavLink to="/saved" className={isActive}>
                  <PiBookmarksSimpleBold size={28} />
                </NavLink>
              </div>
              <div className="tooltip tooltip-bottom" data-tip="Menu">
                <label
                  htmlFor="my-drawer"
                  className="btn btn-square btn-ghost lg:hidden"
                  onClick={toggle}
                >
                  <PiListBold size={28} />
                </label>
              </div>
            </div>
          </nav>
        </div>
        {/* Drawer */}
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu min-h-full w-80 justify-between bg-base-300 p-4">
            {/* Sidebar content here */}
            <div>
              <div className="my-2 flex flex-col items-center gap-2">
                <form>
                  <div className="join">
                    <input
                      className="input join-item input-bordered rounded-full focus:outline-none "
                      placeholder="Search news ..."
                    />
                    <button className="btn btn-neutral join-item rounded-r-full">
                      <PiMagnifyingGlassBold size={28} />
                    </button>
                  </div>
                </form>
                <p className="text-lg font-bold">Category</p>
              </div>
              <li className="flex gap-1">
                {navItem.map((item, index) => (
                  <NavLink key={index} to={item.path} onClick={toggle}>
                    {item.name}
                  </NavLink>
                ))}
              </li>
            </div>
            <div className="btn btn-outline w-full" onClick={toggle}>
              <PiXBold size={28} />
            </div>
          </ul>
        </div>
      </div>

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
