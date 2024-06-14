import tokenomics from "../assets/tokenomics.png";
import Button from "./Button";

const Tokenomics = () => {
  return (
    <section className="mt-6 lg:mt-0  content large flex flex-col md:flex-row justify-center md:items-start w-full">
      <div className="text-center lg:text-start">
        <h2>COCOPAW TOKENOMICS</h2>
        <div>
          <span className="block pb-1">Total supply of 1 Billion tokens</span>
          <span className="block py-1">AIRDROP - 10%</span>
          <span className="block py-1">LIQUIDITY POOL - 70%</span>
          <span className="block py-1">MARKETING - 10%</span>
          <span className="block py-1">TEAM - 5%</span>
          <Button
            buttonText="TRADE COCO"
            className="bg-black text-[var(--clr-offwhite)] mt-5 mx-auto lg:mx-[0px]"
          />
        </div>
      </div>
      <div className="hidden lg:block relative w-[35%] ">
        <img
          src={tokenomics}
          alt=""
          className="absolute -top-[50px] max-w-[450px] left-0"
        />
      </div>
    </section>
  );
};

export default Tokenomics;
