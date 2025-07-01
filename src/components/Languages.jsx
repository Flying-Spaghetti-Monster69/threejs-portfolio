import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { languages } from "../constants";
import GlitchedText from "./GlitchedText";
import PropTypes from "prop-types";

const LanguageCard = ({ index, name, text, icon }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#161616] p-10 rounded-3xl xs:w-[320px] w-full "
  >
    <div className="flex gap-4">
      <img src={icon} alt={name} className="w-[24px] h-[24px]" />
      <h3 className="text-white font-bold ">{name}</h3>
    </div>
    <p className="mt-6">{text}</p>
  </motion.div>
);

LanguageCard.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Languages = () => {
  return (
    <div className="mt-12 rounded-[20px]">
      <div
        className={`bg-gradient-to-t from-zinc-900 to-zinc-800 rounded-2xl w-fit h-min-[300px] mx-auto sm:px-16 md:px-32 px-8 sm:py-8 py-5`}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
          variants={textVariant()}
        >
          <GlitchedText
            text={"Languages"}
            classStyles={`${styles.sectionHeadText} text-primary text-center `}
          />
        </motion.div>
        <div
          className={`sm:px-8 px-3 mt-16 pb-14 flex flex-wrap justify-center gap-7 sm:gap-20`}
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
