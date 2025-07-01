import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import GlitchedText from "./GlitchedText";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full red-gradient p-[1px] rounded-[20px] shadow-[0_10px_20px_rgba(168,_1,_6,_0.7)]"
      >
        <div className=" bg-zinc-950 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-center text-white text-[20px] font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-complementary`}>
          introduction
        </p>
        <GlitchedText
          text={"About Me"}
          classStyles={styles.sectionHeadText}
          span={6}
          spanStyles={`${styles.sectionHeadText} text-complementary`}
        />
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]"
      >
        I started out writing C++ and building small side projects; things like
        terminal-based games and calculators to solve school problems. That
        curiosity eventually led me to JavaScript, where I made some landing
        pages and a simple blackjack game, and from there I dove into modern web
        development with React and Next.js. Since then, I've been hooked on
        building intuitive, responsive user experiences.
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]"
      >
        I'm now looking for a frontend or full-stack role (ideally react or
        next) where I can keep growing and shipping great products, preferably
        in a fast-paced startup environment with a collaborative team. If you're
        hiring and need someone who’s been in love with coding since the old no
        AI days, I’d love to connect!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
