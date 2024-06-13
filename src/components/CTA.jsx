import IconFrame from "./IconFrame";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import Button from "./Button";

const CTA = () => {
  return (
    <section className=" content">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
        <span className="text-base break-all lg:text-2xl text-center lg:text-start">
          CA : 7kq3Rr1PyABRT4DWq2146eqrrS6Kd7Zopb1bAT7FmRhf
        </span>
        <div className="flex gap-x-6">
          <IconFrame href="#" img={telegram} />
          <IconFrame href="#" img={twitter} />
        </div>
      </div>
    </section>
  );
};

export default CTA;
