import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import GlitchedText from "./GlitchedText";
import HeaderGrid from "./HeaderGrid";
import TagsGrid from "./TagsGrid";
import { BentoGrid, BentoGridItem } from "./ui/Bento-Grid";
import { Link } from "react-router-dom";
import { projects } from "../constants";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-primary`}>My work</p>
        <GlitchedText text={"Projects"} classStyles={styles.sectionHeadText} />
      </motion.div>

      {
        <BentoGrid className=" mt-20 md:auto-rows-max">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project, index) => (
              <Tilt
                perspective={3000}
                key={`project-${index}`}
                className={`${project.className} cursor-pointer`}
              >
                <Link to={project.url} target="_blank">
                  <BentoGridItem
                    title={project.title}
                    description={project.text}
                    header={
                      <HeaderGrid
                        url={project.url}
                        image={project.img}
                        githubUrl={project.githubUrl}
                        title={project.title}
                      />
                    }
                    icon={<TagsGrid tags={project.tags} />}
                  />
                </Link>
              </Tilt>
            ))}
        </BentoGrid>
      }
    </>
  );
};

export default SectionWrapper(Works, "works");
