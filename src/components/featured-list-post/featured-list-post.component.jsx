import React from "react";
import Image from "../image-kit/image-kit.component";
import { Link } from "react-router-dom";

const FeaturedPost = () => {
  return (
    // <div className="mt-8 flex flex-col lg:flex-row gap-8">
    //   {/* first post */}
    //   <div className="w-full lg:w-1/2 flex flex-col gap-4">
    //     {/* image */}
    //     <Image
    //       url={
    //         "https://ik.imagekit.io/fpihkmrxn/featured2.jpeg?updatedAt=1732241139595"
    //       }
    //       className="rounded-3xl object-cover"
    //       w="895"
    //     />
    //     {/* details */}
    //     <div className="flex items-center gap-4">
    //       <h1 className="font-semibold lg:text-lg">01.</h1>
    //       <Link className="text-blue-800 lg:text-lg" to={"/"}>
    //         Web design
    //       </Link>
    //       <span className="text-gray-500">2 days ago.</span>
    //     </div>
    //     {/* title */}
    //     <Link to={"/"} className="text-xl lg:text-3xl font-semibold">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quis!
    //     </Link>
    //   </div>
    //   {/* other posts */}
    //   <div className="w-full lg:w-1/2 flex flex-col gap-4">
    //     {/* second */}
    //     <div className="lg:h-1/3 flex justify-between gap-4 aspect-video">
    //       <Image
    //         url={
    //           "https://ik.imagekit.io/fpihkmrxn/featured3.jpeg?updatedAt=1732241139744"
    //         }
    //         className={"object-cover rounded-3xl w-1/3 aspect-video"}
    //         w="298"
    //       />
    //       <div className="w-2/3">
    //         {/* details */}
    //         <div className="">
    //           <h1>02.</h1>
    //           <Link>Web design</Link>
    //           <span>2 days</span>
    //         </div>
    //         <Link to={"/"}>Lorem ispasd hellpad asdasdnasd </Link>
    //       </div>
    //     </div>
    //     <div className="flex justify-between gap-4 lg:h-1/3"></div>
    //     <div className="flex justify-between gap-4 lg:h-1/3"></div>
    //   </div>
    // </div>

    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* first post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
       <div>
       <Image
          url={
            "https://ik.imagekit.io/fpihkmrxn/featured2.jpeg?updatedAt=1732241139595"
          }
          alt="post-image"
          className={"rounded-3xl object-cover aspect-video"}
          w={"895"}
        />
       </div>
        <div className="w-2/3">
          {/* details */}
          <div className="flex items-center gap-4">
            <h1 className="font-semibold lg:text-lg">01.</h1>
            <Link className="text-blue-800 lg:text-lg" to={"/"}>
              Web design
            </Link>
            <span className="text-gray-500">2 days ago.</span>
          </div>
          {/* title */}
          <Link
            to={"/"}
            className="text-xl lg:text-3xl font-semibold line-clamp-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quis!
          </Link>
        </div>
      </div>

      {/* other posts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-3">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
          <Image
            url={
              "https://ik.imagekit.io/fpihkmrxn/featured3.jpeg?updatedAt=1732241139744"
            }
            className={"object-cover rounded-3xl w-full h-full"}
            w="298"
          />
          </div>
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4">
              <h1>02.</h1>
              <Link className="text-blue-800">Web design</Link>
              <span className="text-gray-500">2 days ago.</span>
            </div>
            <Link to={"/"} className="font-bold">
              Lorem ispasd hellpad asdasdnasd{" "}
            </Link>
          </div>
        </div>

        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
         <div className="w-1/3 aspect-video">
         <Image
            url={
              "https://ik.imagekit.io/fpihkmrxn/postImg.jpeg?updatedAt=1732241139849"
            }
            className={"object-cover rounded-3xl w-full h-full"}
            w="298"
          />
         </div>
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4">
              <h1>02.</h1>
              <Link className="text-blue-800">Web design</Link>
              <span className="text-gray-500">2 days ago.</span>
            </div>
            <Link to={"/"} className="font-bold">
              Lorem ispasd hellpad asdasdnasd{" "}
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
         <div className="aspect-video w-1/3">
         <Image
            url={
              "https://ik.imagekit.io/fpihkmrxn/featured1.jpeg?updatedAt=1732241139711"
            }
            className={"object-cover rounded-3xl w-full h-full"}
            w="298"
          />
         </div>
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4">
              <h1>02.</h1>
              <Link className="text-blue-800">Web design</Link>
              <span className="text-gray-500">2 days ago.</span>
            </div>
            <Link to={"/"} className="font-bold">
              Lorem ispasd hellpad asdasdnasd{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
