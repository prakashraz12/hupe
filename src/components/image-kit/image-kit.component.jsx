import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ url, w, h, alt = "image", className }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      src={url}
      alt={alt}
      className={className}
      loading="lazy"
      width={w}
      height={h}
      lqip={{ active: true, quality:20 }}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
