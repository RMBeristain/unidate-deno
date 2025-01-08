import cover from "../assets/images/cover-sm.png";

const Hero = () => {
  return (
    <section className="bg-sky-700 dark:bg-sky-950 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:mr-8 mb-8">
          <a
            className="flex flex-shrink-0 items-center"
            href="https://RMBeristain.com/APARTOFTHEWORLD"
            target="_blank"
          >
            <img
              className="h-50 w-auto imgShadow rounded-md logo"
              src={cover}
              alt="A PART OF THE WORLD - A novel"
              title="Discover A PART OF THE WORLD"
            />
          </a>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Unified Calendar converter
          </h1>
          <p className="my-4 text-xl text-white text-justify mt-8">
            In the <strong>Unified State</strong>{" "}
            people have adopted a new system that completely does away with the
            Western Gregorian calendar.
          </p>
          <p className="my-4 text-xl text-white text-justify">
            The Gregorian calendar starts counting from zero at the birth of the
            founder of Christianity, over two thousand and twenty-something
            years ago.
          </p>
          <p className="my-4 text-xl text-white text-justify">
            The <strong>Unified calendar</strong>{" "}
            sets its year zero at the earliest known evidence of writing, over
            5600 years earlier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
