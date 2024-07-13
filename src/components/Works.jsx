import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import GlitchedText from "./GlitchedText";
import { useProjectsStore } from "../store/projects";
import { useEffect } from "react";
import HeaderGrid from "./HeaderGrid";
import TagsGrid from "./TagsGrid";
import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";

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
        <BentoGrid className=" mt-20 md:auto-rows-max">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project, index) => (
              <Tilt
                perspective={2500}
                key={`project-${index}`}
                className={`${project.className} cursor-pointer`}
              >
                <BentoGridItem
                  title={project.title}
                  description={project.text}
                  header={
                    <HeaderGrid
                      url={project.url}
                      image={project.image}
                      githubUrl={project.githubUrl}
                    />
                  }
                  icon={<TagsGrid tags={project.tags} />}
                />
              </Tilt>
            ))}
        </BentoGrid>
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");
