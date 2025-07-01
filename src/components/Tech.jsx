import { SectionWrapper } from "../hoc";
import { technologies, badges } from "../constants";
import { DivWithMovingBorder } from "./ui/Moving-Border";
import GlitchedText from "./GlitchedText";
import { styles } from "../style";

const Tech = () => {
  return (
    <section className="flex flex-col items-center">
      <GlitchedText
        text={"Tech"}
        classStyles={`${styles.sectionHeadText} mb-6`}
      />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((tech) => (
          <DivWithMovingBorder
            borderClassName={"border-primary"}
            containerClassName={"w-28 h-28 bg-[#222222]"}
            className=" p-2 cursor-default flex flex-col items-center   rounded-md"
            key={tech.name}
          >
            <img src={tech.icon} alt={tech.name} className="w-14 h-14" />
            <p className="text-center">{tech.name}</p>
          </DivWithMovingBorder>
        ))}
      </div>
      <GlitchedText
        text={"Badges"}
        classStyles={`${styles.sectionHeadText} mt-6`}
      />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        <DivWithMovingBorder
          borderClassName={"border-primary"}
          containerClassName={
            "w-fit h-fit bg-[#222222] flex flex-row flex-wrap"
          }
          className="p-4 cursor-default rounded-md"
        >
          <div className="flex flex-row flex-wrap items-center justify-center gap-6">
            {badges.map((badge) => (
              <img
                key={badge.name}
                src={badge.icon}
                alt={badge.name}
                className="w-32 h-32 object-contain m-2"
              />
            ))}
          </div>
        </DivWithMovingBorder>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "Tech");
