import roadmap from "../assets/roadmap.svg";

const Roadmap = () => {
  return (
    <section className="mt-6 md:mt-0 content large flex flex-col justify-center items-center ">
      <img src={roadmap} className="max-w-[700px] w-[100%]" alt="" />
      <h2 className="text-center md:text-start">ROADMAP COMING SOON</h2>
    </section>
  );
};

export default Roadmap;
