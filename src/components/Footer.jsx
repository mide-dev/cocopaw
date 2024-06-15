import countMoney from "../assets/countMoney.png";
import IconFrame from "./IconFrame";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <section className=" content flex flex-col justify-center items-center">
      <p className="text-center  pb-8  max-w-[900px]">
        <span className="font-semibold">Disclaimer:</span> $CPAW is a meme coin
        with no value or financial expectations. $CPAW is purely for
        entertainment. By purchasing $CPAW, you acknowledge this disclaimer.
      </p>
      <div className="flex gap-x-6">
        <IconFrame href="https://t.me/cocopawofficial" img={telegram} />
        <IconFrame
          href="https://x.com/cocopawsol?s=21&t=P50pIkW65Qob_E9TU-KPKg"
          img={twitter}
        />
      </div>
      <img
        src={countMoney}
        alt=""
        className="hidden lg:block absolute max-w-[200px] right-[20px]"
      />
    </section>
  );
};

export default Footer;
