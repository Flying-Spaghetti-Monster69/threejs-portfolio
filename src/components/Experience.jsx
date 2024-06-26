import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import { styles } from "../style";
import { education } from "../constants";
import { textVariant } from "../utils/motion";
import GlitchedText from "./GlitchedText";
import { SectionWrapper } from "../hoc";
import Languages from "./Languages";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      iconStyle={{ background: "#222222" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      contentStyle={{ background: "#222222", color: "#fff" }}
    >
      <div>
        <h3 className="text-primary text-[24px] font-bold">
          {experience.title}
        </h3>
        <p className="text-[16px] font-semibold text-gray-400">
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-primary`}>
          my journey so far
        </p>
        <GlitchedText text={"Education"} classStyles={styles.sectionHeadText} />
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <Languages />
    </>
  );
};

export default SectionWrapper(Experience, "experience");
