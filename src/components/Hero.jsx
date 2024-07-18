import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import GlitchedText from "./GlitchedText";

const Hero = () => {
  return (
    <section className="relative w-full h-[100svh] mx-auto">
      <div className={` w-full absolute inset-0 top-[70px] z-0 `}>
        <div
          className={` absolute top-[120px] inset-0 w-fit h-fit justify-center items-center mx-auto z-10 flex flex-col`}
        >
          <h1 className="flex flex-row">
            <GlitchedText
              text={"HELLO, I'M FELIPE"}
              classStyles={
                "px-2 text-5xl text-center sm:p-0 sm:text-6xl text-white "
              }
              span={11}
              spanStyles={"text-5xl sm:text-6xl text-primary"}
            />
          </h1>
          <h2 className="px-2 text-sm sm:text-base text-center sm:text-left sm:p-0 mt-1">
            Passionate Learner Building Innovative Front-End Experiences.
          </h2>
          <h2 className=" px-2 text-xs sm:p-0 text-gray-600 sm:text-sm text-center">
            // Try to hover on titles and drag to move background
          </h2>
        </div>
        <ComputersCanvas />
        <div className="absolute xs:bottom-10 bottom-32 w-fit mt-56 centered-div">
          <a href="#works">
            <div className="w-[35px] h-[64px] border-4 rounded-3xl p-2 border-primary flex items-start justify-center">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-primary mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
