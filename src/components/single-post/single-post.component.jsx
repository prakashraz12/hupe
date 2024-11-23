import React from "react";
import Image from "../image-kit/image-kit.component";
import { Link } from "react-router-dom";

const SinglePostComponent = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            sapiente!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By</span>
            <Link className="text-blue-800">Jon Doie</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago.</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            nesciunt eius animi maxime adipisci dolorem, inventore provident rem
            perferendis architecto, nobis placeat ad? Saepe obcaecati, maiores
            minima doloribus repellat nobis!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image
            url={
              "https://ik.imagekit.io/fpihkmrxn/postImg.jpeg?updatedAt=1732241139849"
            }
            alt="post-image"
            className={"rounded-xl"}
          />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ullam!
            Quisquam facilis sunt, modi alias quia rem, tenetur repellendus
            accusantium numquam labore non facere fugiat unde qui at harum
            cumque quaerat consequatur dolor nesciunt! Ex consectetur, dolor
            animi minima nobis ipsa rem, quaerat qui aspernatur dolores unde
            maxime nulla temporibus magnam hic possimus corrupti, fuga est
            aperiam eius voluptatibus at sed deleniti quasi? Culpa et
            necessitatibus, aperiam harum numquam qui nihil accusantium ipsum
            laudantium mollitia ipsam in iste, expedita cum tempora eveniet
            error magni molestias quasi ut fugit, repellendus molestiae.
            Voluptates ut nihil amet eaque labore ratione, reprehenderit dicta,
            libero culpa nam distinctio aspernatur ab? Aut eveniet maxime
            quisquam beatae quaerat, accusantium eaque quos optio, ad hic
            repellendus. Debitis explicabo quo voluptates cumque, distinctio
            dolorem doloremque natus rerum accusamus ipsa repellendus tempora
            suscipit rem voluptas autem nulla id quidem quaerat officia eaque
            iusto eos veritatis ex. Rem quae corporis sunt reiciendis hic, unde
            commodi similique molestiae sint incidunt repudiandae repellendus ad
            facere dolor nisi numquam laudantium tempore ex beatae quisquam
            doloremque maxime ut. Provident aperiam voluptate nulla error
            recusandae facere architecto, natus autem quos sit excepturi totam
            officia dignissimos. Veritatis hic atque quod dicta quia aut
            delectus explicabo quas. Perspiciatis!
          </p>
        </div>
        {/* sticky meu */}
        <div className="px-4 h-max sticky top-8">
          <h1>Author</h1>
          <div className="">
            <Image
              url={"https://ik.imagekit.io/fpihkmrxn/userImg.jpeg?updatedAt=1732241139486"}
              alt="user-image"
              className={"w-12 h-12 rounded-full object-cover"}
              w={"48"}
              h={"48"}
            />
            <Link>Joan Doe</Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, sapiente!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostComponent;
