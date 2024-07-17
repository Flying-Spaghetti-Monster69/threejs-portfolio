import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { isAndroid, isChromium } from "react-device-detect";
import { DivWithMovingBorder } from "./ui/Moving-Border";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* webgl contexts in android is limited chrome is very limited, this is a temporal fix */}
      {isChromium && isAndroid
        ? technologies.map((tech) => (
            <DivWithMovingBorder
              borderClassName={"border-primary"}
              containerClassName={"w-28 h-28 bg-[#222222]"}
              className=" p-2 cursor-default flex flex-col items-center   rounded-md"
              key={tech.name}
            >
              <img src={tech.icon} alt={tech.name} className="w-14 h-14" />
              <p className="text-center">{tech.name}</p>
            </DivWithMovingBorder>
          ))
        : technologies.map((tech) => (
            <div className="w-28 h-28" key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
    </div>
  );
};

export default SectionWrapper(Tech, "Tech");
