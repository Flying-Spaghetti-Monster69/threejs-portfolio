import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { languages } from "../constants";
import GlitchedText from "./GlitchedText";

const LanguageCard = ({ index, name, text, icon }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#161616] p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <div className="flex gap-4">
      <img src={icon} alt={name} className="w-[24px] h-[24px]" />
      <h3 className="text-white font-bold ">{name}</h3>
    </div>
    <p className="mt-6">{text}</p>
  </motion.div>
);

const Languages = () => {
  return (
    <div className="mt-12 rounded-[20px]">
      <div
        className={`${styles.padding} bg-gradient-to-t from-zinc-800 to-[#222222] rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <GlitchedText
            text={"Languages"}
            classStyles={`${styles.sectionHeadText} text-primary text-center `}
          />
        </motion.div>
        <div
          className={`${styles.paddingX} mt-16 pb-14 flex flex-wrap justify-center gap-7 sm:gap-20`}
        >
          {languages.map((language, index) => (
            <LanguageCard key={language.name} index={index} {...language} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Languages;
