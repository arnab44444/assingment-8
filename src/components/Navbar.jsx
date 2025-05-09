import React from "react";
import { Link, NavLink } from "react-router";
import { MdBookmarkAdd, MdShoppingCart } from "react-icons/md";

const Navbar = () => {
  //const { cart } = useContext(CartContext);
  // console.log(cart);

  return (
    <div className="navbar p-0 bg-gray-200 border-b px-8 md:px-12 lg:px-16 xl:px-24 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer mr-2 lg:hidden"
          >
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
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/bookings"
              >
                My-Bookings
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/blog"
              >
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-indigo-500" : ""
                }
                to="/contactUs"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex gap-2">
          <img src="/src/assets/logo.png" className="h-10" />
          <p className="text-center font-bold mt-2">Phudu</p>
        </div>

        {/* <Link to='/' className='text-xl font-bold'>
          Phudu
        </Link> */}
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
              to="/bookings"
            >
              My-Bookings
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
              to="/blog"
            >
              Blogs
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "text-indigo-500" : "")}
              to="/contactUs"
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-primary rounded-lg">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;
