import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  const logo = "./src/images/logo.png";
  return (
    <>
      <header className="flex flex-col h-screen items-center justify-center">
        <div className="left flex  items-center justify-between w-96  p-1 ">
          <img
            src={logo}
            alt="logo"
            className="w-16 cursor-pointer hover:drop-shadow-2xl"
          />
          <h1 className="text-text-color text-4xl cursor-pointer font-semibold hover:drop-shadow-lg">
            Sham Portfolio
          </h1>
        </div>
        <div className="pt-5">
          <h2>Page Not Found</h2>
          <p>Please check the correct url </p>
          <p className="mt-4 ">
            Go to the{" "}
            <NavLink to="/" className="p-2 ml-2 bg-red-500 rounded-lg">
              HomePage
            </NavLink>
          </p>
        </div>
      </header>
    </>
  );
}
