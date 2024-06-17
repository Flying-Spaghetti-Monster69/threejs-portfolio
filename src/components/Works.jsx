import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github, www } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import GlitchedText from "./GlitchedText";
import { useProjectsStore } from "../store/projects";
import { useEffect } from "react";

const ProjectCard = ({
  index,
  title,
  url,
  id,
  image,
  text,
  githubUrl,
  tags,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Tilt className="bg-[#222222] p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end gap-1 m-3 card-img_hover">
            <div
              onClick={() => window.open(githubUrl, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={github} alt="github" />
            </div>
            <div
              onClick={() => window.open(url, "_blank")}
              className="bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={www} alt="www" />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-[24px] text-primary">{title}</h3>
          <p className="mt-2 text-[14px]">{text}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => {
            return (
              <>
                <p key={tag.name} className={`text-complementary text-[14px]`}>
                  #{tag.name}
                </p>
              </>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { projects, fetchProjects, loading } = useProjectsStore(
    (state) => state
  );

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-primary`}>My work</p>
        <GlitchedText text={"Projects"} classStyles={styles.sectionHeadText} />
      </motion.div>

      {loading ? (
        <h1 className="mt-20 text-white text-center">loading...</h1>
      ) : (
        <div className="mt-20 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              {...project}
              index={index}
              style={{ transitionDelay: `${index * 0.5}s` }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");
