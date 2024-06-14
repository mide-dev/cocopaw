import about from "../assets/about.png";
import Button from "./Button";
import loveletter from "../assets/loveletter.png";

const About = () => {
  return (
    <section className="mt-6 md:mt-0 content large flex flex-col md:flex-row justify-center items-start md:items-center w-full gap-x-24">
      <img
        src={loveletter}
        alt=""
        className="max-h-[550px] order-2 lg:order-1 mt-10 lg:mt-0"
      />
      {/* </div> */}
      <div className="order-1 lg:order-2 text-center md:text-start mx-auto md:mx-0">
        <h2>SOLANA COOLEST CATS.</h2>
        <div>
          <p className="pb-6 max-w-[350px]">
            Yo, welcome to Cocopaw – the waviest meme coin on Solana! We’re not
            just slingin' tokens; we’re building a crew of cat-obsessed crypto
            fanatics. Our cats are rare, our vibes are legendary, and we’re here
            to flip the script on what a meme coin can be.
          </p>
          <p className="max-w-[350px]">
            Think you got what it takes to roll with the coolest cats? Hop in,
            flex your paws, and let's ride this wave to the moon. No cap, it's
            gonna be a wild ride. Wagmi, fam!
          </p>
        </div>
        <div className="flex gap-x-6 mt-8 justify-center lg:justify-start">
          <Button
            buttonText="TRADE COCO"
            className="bg-black text-[var(--clr-offwhite)]"
          />
          <Button
            buttonText="CONTRACT"
            className="border-[1px] border-black text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
