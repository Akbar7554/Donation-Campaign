import { NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#FF444A] underline text-lg font-bold"
              : isPending
              ? "pending"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/donation"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#FF444A] underline text-lg font-bold"
              : isPending
              ? "pending"
              : ""
          }
        >
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/statistics"
          className={({ isActive, isPending }) =>
            isActive
              ? "text-[#FF444A] underline text-lg font-bold"
              : isPending
              ? "pending"
              : ""
          }
        >
          Statistics
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-[80%] mx-auto flex justify-between ">
      <img className="w-40" src="/public/images/Logo.png" alt="" />
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-30"
          >
            {links}
          </ul>
        </div>
        {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Header;
