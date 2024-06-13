import about from "../assets/about.png";
import Button from "./Button";

const About = () => {
  return (
    <section className="mt-6 lg:mt-0 content large flex flex-col md:flex-row justify-center items-start w-full gap-x-20">
      <div className="order-2 md:order-1 flex flex-col justify-around border-[1px] px-6 py-10 shadow-md text-center md:text-start mx-auto md:mx-0">
        <h3>A LOVE LETTER FROM COCOPAW 🤎‍</h3>
        <div>
          <p className="pb-6 max-w-[350px]">
            <span className="block pb-2">Hey fam,</span> We’re stoked to have
            you here. Cocopaw isn’t just a coin; it’s a movement, a vibe, a
            family of cat-loving, crypto-savvy legends. From the moment you join
            us, you're not just a holder; you're part of the squad, part of the
            dream. We built Cocopaw with one thing in mind: to bring joy,
            community, and a bit of that wild, degen spirit into the world of
            crypto.
          </p>
          <p className="pb-6 max-w-[350px]">
            Every token, every cat, every meme – it’s all crafted with love and
            a wink to the culture we live for. So here’s to you, to us, to the
            wild ride ahead. Together, we’ll scratch our way to the top and have
            a blast doing it. Thanks for being a part of the Cocopaw family.
            Let’s get it! Much love and many memes.
            <span className="block pt-4">The Cocopaw Team.</span>
          </p>
        </div>
        <div
          className="rounded-full w-16 h-16 bg-[var(--clr-secondary)] bg-cover bg-top border-[2px] 
          border-[var(--clr-primary)] mt-4 ml-auto overflow-hidden"
        >
          <img src={about} alt="" />
        </div>
      </div>
      <div className="order-1 md:order-2 mb-20 text-center md:text-start mx-auto md:mx-0">
        <h2>SOLANA COOLEST CATS.</h2>
        <div>
          <p className="pb-6 max-w-[350px]">
            Arrrggghhhh - join the waviest crew of cat-obsessed crypto fanatics.
            Our cats are rare, our vibes are legendary, and we’re here to flip
            the script on what a meme coin can be.
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
