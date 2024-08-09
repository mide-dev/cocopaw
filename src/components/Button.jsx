import React from "react";

const Button = ({ className, buttonText }) => {
  return (
    <a
      href="https://dexscreener.com/solana/d1et3uhvomj6ixksyfsemwnpudvqjqnpy9tcv9xpzehz"
      target="_blank"
      className={`${className} text-sm py-3 px-6 rounded-lg text-center  flex items-center shadow-md hover:shadow-xl`}
    >
      {buttonText}
    </a>
  );
};

export default Button;
