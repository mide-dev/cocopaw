import React from "react";

const Button = ({ className, buttonText }) => {
  return (
    <button
      className={`${className} text-sm py-3 px-6 rounded-lg text-center  flex items-center shadow-md hover:shadow-xl`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
