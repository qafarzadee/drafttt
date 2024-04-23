import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";


import { logoImg } from "../assets/images/index";

const Navbar = () => {
  return (
    <nav className="w-full h-4 text-white flex justify-between">
      <div className="m-8">
        <img src={logoImg} alt="" />
      </div>
      <div className="flex m-8 gap-8">
        <div className="flex gap-10">
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/blog"}>Blog</Link>
          <Link to={"/our-story"}>Our Story</Link>
        </div>
        <hr className="border-l bg-white h-4 m-1" />
        <div className="flex gap-10 m-1">
            <CiSearch />
            <CiShoppingCart />
            <CiUser />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
