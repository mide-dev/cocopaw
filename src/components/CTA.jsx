import IconFrame from "./IconFrame";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import Button from "./Button";
import Contract from "./Contract";

const CTA = () => {
  return (
    <section className=" content relative">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-6">
        <span className="text-base break-all lg:text-2xl text-center lg:text-start cursor-pointer">
          CA: <Contract />
        </span>
        <div className="flex gap-x-6">
          <IconFrame href="https://t.me/cocopawofficial" img={telegram} />
          <IconFrame
            href="https://x.com/cocopawsol?s=21&t=P50pIkW65Qob_E9TU-KPKg"
            img={twitter}
          />
        </div>
      </div>
    </section>
  );
};

export default CTA;
