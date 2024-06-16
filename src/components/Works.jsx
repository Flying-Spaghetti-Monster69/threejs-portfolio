import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import GlitchedText from "./GlitchedText";
import { useProjectsStore } from "../store/projects";
import { useEffect } from "react";

const ProjectCard = ({ title, url, id, image, text, githubUrl }) => {
  return <img src={image} alt={title} />;
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
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");
