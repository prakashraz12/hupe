import React from "react";
import { Link } from "react-router-dom";
import Search from "../search/search.component";

const MainCategory = () => {
  return (
    <div className="hidden border rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 md:flex">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to={"/posts"}
          className="bg-blue-800 text-white rounded-full px-4 py-2 hover:bg-blue-50 hover:text-black"
        >
          All Posts
        </Link>
        <Link
          to={"/posts"}
          className="  rounded-full px-4 py-2 hover:bg-blue-50 hover:text-black"
        >
          Web development
        </Link>
        <Link
          to={"/posts"}
          className=" rounded-full px-4 py-2 hover:bg-blue-50 hover:text-black"
        >
          Marketing
        </Link>
        <Link
          to={"/posts"}
          className=" rounded-full px-4 py-2 hover:bg-blue-50 hover:text-black"
        >
          Business
        </Link>
        <Link
          to={"/posts"}
          className=" rounded-full px-4 py-2 hover:bg-blue-50 hover:text-black"
        >
          Stock Market
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  );
};

export default MainCategory;
