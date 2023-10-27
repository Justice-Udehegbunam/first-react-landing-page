import React from "react";
import Button from "./Button";

function NavBar() {
  return (
    <>
      <nav className="bg-gray-500 fixed h-16 w-full flex items-center px-3 justify-between pr-8">
        <h1 className=" text-3xl text-red-600 font-bold">Portfolio</h1>
        <div className="flex items-center gap-8">
          <a
            href="/"
            className="text-white text-lg font-semibold hover:text-red-600"
          >
            Home
          </a>
          <a
            href=""
            className="text-white text-lg font-semibold hover:text-red-600"
          >
            About
          </a>
          <a
            href=""
            className="text-white text-lg font-semibold hover:text-red-600"
          >
            Project
          </a>
          <a
            href=""
            className="text-white text-lg font-semibold hover:text-red-600"
          >
            Contact
          </a>
        </div>
        <Button name="Contact Me" />
      </nav>
    </>
  );
}

export default NavBar;
