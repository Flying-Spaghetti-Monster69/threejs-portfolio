import { motion } from "framer-motion";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={` w-full absolute inset-0 top-[68px] `}>
        <ComputersCanvas />
      </div>
    </section>
  );
};

export default Hero;
