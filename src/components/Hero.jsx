import heroImg from "../assets/heroImg.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className="relative flex justify-center content lg:max-w-full">
        <img className="object-cover" src={heroImg} alt="" />
        <Button
          buttonText="BUY COCO"
          className="hidden lg:block bg-[var(--clr-offwhite)] absolute text-black bottom-[10%] font-semibold"
        />
      </section>
    </>
  );
};

export default Hero;
