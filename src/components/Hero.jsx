import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import GlitchedText from "./GlitchedText";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={` w-full absolute inset-0 top-[70px] z-0 `}>
        <div
          className={` absolute top-[120px] inset-0 w-fit h-fit justify-center items-center mx-auto z-10 flex flex-col`}
        >
          <h1 className="flex flex-row">
            <GlitchedText
              text={"HELLO, I'M FELIPE"}
              classStyles={"text-6xl text-white "}
              span={11}
              spanStyles={"text-6xl text-primary"}
            />
          </h1>
          <h2 className="mt-1">
            A Passionate Learner Building Innovative Front-End Experiences.
          </h2>
          <h3 className=" text-gray-600 text-sm text-center">
            // drag to move background
          </h3>
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
