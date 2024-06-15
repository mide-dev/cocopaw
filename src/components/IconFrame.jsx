import React from "react";

const IconFrame = ({ href, img }) => {
  return (
    <a
      className="rounded-full cursor-pointer w-[50px] shadow-md hover:shadow-xl"
      href={href}
      target="_blank"
    >
      <img src={img} alt="#" />
    </a>
  );
};

export default IconFrame;
