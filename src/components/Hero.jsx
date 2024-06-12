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
      </div>
    </section>
  );
};

export default Hero;
