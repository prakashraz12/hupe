import React, { useState } from "react";
import Image from "../image-kit/image-kit.component";
import { Link } from "react-router-dom";
import { SignedOut, SignIn, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full   h-16 md:h-20 flex justify-between items-center">
      {/* logo */}
      <Link to={"/"} className="flex items-center gap-2">
       
        <span className="font-bold text-orange-600">Hupe</span>
      </Link>
      {/* mobile menu */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen);
          }}
        >
          {isMobileMenuOpen ? "x" : "="}
        </div>
        <div
          className={`w-full h-screen flex  transition-all ease-in-out duration-500 flex-col items-center justify-center absolute top-16 ${
            isMobileMenuOpen ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-900 text-white">
              Login{" "}
            </button>
          </Link>
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden md:flex  items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-900 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
