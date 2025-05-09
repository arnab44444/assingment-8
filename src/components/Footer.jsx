import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router";

export default function Footer() {

  return (
    <footer className="bg-gray-500 text-white mt-10 py-10">
      <div className="navbar flex flex-col items-center justify-center gap-4 text-center">
        {/* Logo and Title */}
        <div className=" flex items-center gap-2">
          <img src="/src/assets/logo.png" className="h-10" />
          <p className="font-bold mt-2">Phudu</p>
        </div>

        {/* Navigation Links */}
        <div className="navbar-center">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : ""
                }
                to="/bookings"
              >
                My-Bookings
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : ""
                }
                to="/blog"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : ""
                }
                to="/contactUs"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl justify-center">
          <a href="#" className="text-blue-500 hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-blue-700 hover:text-blue-500">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-red-600 hover:text-red-400">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}
