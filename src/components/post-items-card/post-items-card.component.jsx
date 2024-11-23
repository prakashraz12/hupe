import React from "react";
import Image from "../image-kit/image-kit.component";
import { Link } from "react-router-dom";

const PostItemCard = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          url={
            "https://ik.imagekit.io/fpihkmrxn/default-image.jpg?updatedAt=1732203003059"
          }
          alt="post-image"
          className={"rounded-2xl object-cover aspect-video"}
          w={800}
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={"/"} className="text-4xl font-semibold">
        error qui necessitatibus earum nihil doloribus corporis modi, sint

        </Link>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800">Joan doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago.</span>
        </div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          error qui necessitatibus earum nihil doloribus corporis modi, sint
          eligendi quisquam?
        </p>
        <Link className="underline text-blue-800">Read More</Link>
      </div>
    </div>
  );
};

export default PostItemCard;
